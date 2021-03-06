import React from 'react'
import {connect} from "react-redux"

const TItle = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        title: state.titleReducer
    }
}


export default connect(mapStateToProps)(TItle);