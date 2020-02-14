import React from 'react'
import {bindActionCreators} from 'redux';
import {decreaseCounter} from '../redux/actions/counterActions'
import {connect} from "react-redux"
import {changeTitle} from "../redux/actions/titleActions";
import {Input} from "reactstrap";
import titleReducer from "../redux/reducers/titleReducer";


const DecreaseCounter = ({title, decrease, changeTitle}) => {
    return (
        <div>
            <button onClick={e => {
                decrease();
            }}>
                1 eksilt
            </button>
            <Input placeholder="Search Users" className={"form-control form-control-lg"} value={title}
                   onChange={(event) => changeTitle(event.target.value)}/>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        title: state.titleReducer
    }
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