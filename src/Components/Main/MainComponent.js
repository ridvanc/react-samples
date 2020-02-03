import React, {Component} from "react";
import {Table, ListGroup, ListGroupItem, ListGroupItemHeading} from 'reactstrap';

export default class MainComponent extends Component {
    state = {
        todosList: []
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(response => response.json())
            .then(json => this.setState({todosList: json}))
    }

    render() {
        return <>
            <ListGroup flush>
                {
                    this.state.todosList.map(todoItem => (
                        <ListGroupItem active={todoItem.completed} key={todoItem.id}>
                            <ListGroupItemHeading>{todoItem.title}</ListGroupItemHeading>
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </>;
    }

}