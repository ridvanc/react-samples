import React, {useState, useEffect} from "react";
import {Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';

import Axios from "axios";
import {connect} from "react-redux";
import {closeLoading, closeModalLoading, openLoading, openModalLoading} from "../../redux/actions/loadingActions";
import CustomModal from "../../Common/CustomModal";

const MainComponent = ({modalLoading, open, close, openModalLoading, closeModalLoading}) => {
    const [todos, setTodos] = useState([]);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [selectedTodo, setInput] = useState({id: 0, title: ''});
    const click = (todoItem) => {
        setInput({
            id: todoItem.id,
            title: todoItem.title
        });
        setModal(!modal);
    };

    const handleInputChange = (e) => setInput({
        ...selectedTodo,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const saveChanges = () => {
        openModalLoading();
        Axios.put("https://jsonplaceholder.typicode.com/posts/" + selectedTodo.id, selectedTodo)
            .then(response => {
                closeModalLoading();
                console.log(response.data);
            });
    };

    const onModalClose = (e) => {
        setTodos([]);
        refreshList();
    };

    const refreshList = () => {
        open();
        Axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then(response => {
                close();
                setTodos(response.data);
            });
    };

    useEffect(() => {
        refreshList()
    }, []);

    return (
        <>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map(todoItem => (
                        <tr key={todoItem.id}>
                            <th scope="row">{todoItem.id}</th>
                            <td>{todoItem.title}</td>
                            <td>
                                <Button outline onClick={() => click(todoItem)}
                                        color="primary">primary</Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
            <CustomModal title={"Edit Todo"} modal={modal} toggle={toggle}
                         onModalClose={onModalClose} unmountOnClose={true}
                         process={saveChanges}>
                <Input type="textarea"
                       name="title"
                       placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
                       rows={5}
                       value={selectedTodo.title}
                       onChange={handleInputChange}
                />
            </CustomModal>
        </>
    );

};

function mapStateToProps(state) {
    return {
        modalLoading: state.modalLoadingReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        open: () => {
            dispatch(openLoading());
        },
        close: () => {
            dispatch(closeLoading());
        },
        openModalLoading: () => {
            dispatch(openModalLoading());
        },
        closeModalLoading: () => {
            dispatch(closeModalLoading());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);