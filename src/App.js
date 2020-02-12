import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "./Pages/NotFound";
import {DefaultLayout} from "./Layouts/DefaultLayout";

export default class App extends Component {

    render() {
        return <div>
            <Switch>
                <Route exatch path="/404" component={NotFound}></Route>
                <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>}/>
            </Switch>
        </div>;
    }

};
