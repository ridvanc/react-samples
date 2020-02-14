import React, {Component} from 'react';
import HeaderComponent from "../Components/Header/HeaderComponent"
import {Redirect, Route, Switch} from "react-router-dom";
import AboutComponent from "../Components/About/AboutComponent";
import {MainComponent} from "../Components/Main/MainComponent";
import NotFound from "../Pages/NotFound";
import {User} from "../Components/User/User";
import {Container} from "reactstrap";
import {UserDetail} from "../Components/User/UserDetail";
import Loader from "../Common/Loader";

export const DefaultLayout = () => {
    return (
        <div>
            <Loader/>
            <HeaderComponent/>
            <Container>
                <Switch>
                    <Route path="/home" component={MainComponent}></Route>
                    <Route path="/users/:id" component={UserDetail}></Route>
                    <Route path="/users" component={User}></Route>
                    <Route path="/about" component={AboutComponent}></Route>
                    <Redirect from="/" to="/home"/>
                    <Route component={NotFound}></Route>
                </Switch>
            </Container>
        </div>
    );

};