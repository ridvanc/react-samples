import React from 'react'
import {bindActionCreators} from 'redux';
import {decreaseCounter} from '../redux/actions/counterActions'
import {connect} from "react-redux"
import {changeTitle} from "../redux/actions/titleActions";
import {Input} from "reactstrap";


const DecreaseCounter = ({decrease, changeTitle}) => {
    return (
        <div>
            <button onClick={e => {
                decrease();
            }}>
                1 eksilt
            </button>
            <Input placeholder="Search Users" className={"form-control form-control-lg"}
                   onChange={(event) => changeTitle(event.target.value)}/>
        </div>
    )
};

function mapStateToProps() {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        decrease: () => {
            dispatch(decreaseCounter());
        },
        changeTitle: (value) => {
            dispatch(changeTitle(value));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DecreaseCounter);