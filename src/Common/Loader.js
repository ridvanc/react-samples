import React from "react";
import {connect} from "react-redux";
import ReactLoading from "react-loading";


const Loader = ({loading}) => {
    return (
        loading ?
            <></>
            :
            <ReactLoading type={"bars"} color={"red"}/>

    );

};

function mapStateToProps(state) {
    return {
        loading: state.loadingReducer
    }
}


export default connect(mapStateToProps)(Loader);