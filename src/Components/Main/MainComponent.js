import React, {useState, useEffect} from "react";
import {Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';

export const MainComponent = (props) => {
    const [todos, setTodos] = useState([]);
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
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
        console.log(selectedTodo);
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(response => response.json())
            .then(json => setTodos(json))
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
                                <Button outline onClick={() => click(todoItem)} color="primary">primary</Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>

            <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Todo Edit</ModalHeader>
                <ModalBody>
                    <Input type="textarea"
                           name="title"
                           placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
                           rows={5}
                           value={selectedTodo.title}
                           onChange={handleInputChange}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveChanges}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );

}