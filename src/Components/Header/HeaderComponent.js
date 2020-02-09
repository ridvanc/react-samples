import React, {Component} from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from "react-router-dom";


export default class HeaderComponent extends Component {
    state = {
        isOpen: false
    };
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        return <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={Link} to="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={() => this.toggle()}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/home">Todos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/users">Users</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/about">About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>;
    }
};