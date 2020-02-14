import React from "react";
import {connect} from "react-redux";
import {closeLoading, openLoading} from "../redux/actions/loadingActions";
import {Button} from "reactstrap";

const LoaderManager = ({loading,open, close}) => {
    return (
        <>
            <Button color="primary" disabled={!loading} onClick={() => open()}>Open</Button>
            &nbsp;
            <Button color="warning" disabled={loading} onClick={() => close()}>Close</Button>
        </>
    );
};

function mapStateToProps(state) {
    return {
        loading: state.loadingReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        open: () => {
            dispatch(openLoading());
        },
        close: () => {
            dispatch(closeLoading());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoaderManager);