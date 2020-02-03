import React, {Component} from 'react';
import HeaderComponent from "../Components/Header/HeaderComponent"
import {Redirect, Route, Switch} from "react-router-dom";
import AboutComponent from "../Components/About/AboutComponent";
import {MainComponent} from "../Components/Main/MainComponent";

class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <Switch>
                    <Route path="/home" component={MainComponent}></Route>
                    <Route path="/about" component={AboutComponent}></Route>
                    <Redirect from="/" to="/home"/>
                </Switch>
            </div>
        );
    }
}

export default DefaultLayout;