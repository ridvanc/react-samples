import React, {useState, useEffect} from "react";
import {Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';
import ReactLoading from "react-loading";
import Axios from "axios";

export const MainComponent = (props) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
    const toggle = () => setModal(!modal);
    const [selectedTodo, setInput] = useState({id: 0, title: ''});
    const click = (todoItem) => {
        setModalLoading(true);
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
        setModalLoading(false);
        Axios.put("https://jsonplaceholder.typicode.com/posts/" + selectedTodo.id, selectedTodo)
            .then(response => {
                setModalLoading(true);
                console.log(response.data);
            });
    };

    const onModalClose = (e) => {
        setTodos([]);
        refreshList();
    };

    const refreshList = () => {
        setLoading(false);
        Axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then(response => {
                setLoading(true);
                setTodos(response.data);
            });
    };

    useEffect(() => {
        refreshList()
    }, []);

    return (
        <>
            {
                loading ?
                    (
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
                    )
                    :
                    (
                        <ReactLoading type={"bars"} color={"red"}/>
                    )
            }
            <Modal isOpen={modal} toggle={toggle} onClosed={onModalClose} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Todo Edit</ModalHeader>
                <ModalBody>
                    {
                        modalLoading ?
                            (
                                <Input type="textarea"
                                       name="title"
                                       placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
                                       rows={5}
                                       value={selectedTodo.title}
                                       onChange={handleInputChange}
                                />
                            ) :
                            (<ReactLoading type={"cubes"} color={"red"}/>)
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveChanges}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );

}