import React from 'react'
import {connect} from "react-redux"

const Counter = ({counter, title}) => {
    return (
        <div>
            <h1>{counter}</h1>
            <h5>{title}</h5>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        counter: state.counterReducer,
        title: state.titleReducer
    }
}


export default connect(mapStateToProps)(Counter);