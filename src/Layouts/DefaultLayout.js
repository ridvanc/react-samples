import React from 'react';
import HeaderComponent from "../Components/Header/HeaderComponent"
import {Redirect, Route, Switch} from "react-router-dom";
import AboutComponent from "../Components/About/AboutComponent";
import MainComponent from "../Components/Main/MainComponent";
import NotFound from "../Pages/NotFound";
import User from "../Components/User/User";
import {Container} from "reactstrap";
import {UserDetail} from "../Components/User/UserDetail";
import LoadingOverlay from "react-loading-overlay";
import {connect} from "react-redux";
import "../index.css";
import {BeatLoader} from "react-spinners";

const DefaultLayout = ({loading}) => {
    return (
        <LoadingOverlay
            active={loading}
            spinner={<BeatLoader/>}
            text=''
        >
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
        </LoadingOverlay>
    );

};

function mapStateToProps(state) {
    return {
        loading: state.loadingReducer
    }
}

export default connect(mapStateToProps)(DefaultLayout);