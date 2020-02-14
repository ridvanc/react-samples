import * as actionTypes from "../actions/actionTypes";

const titleReducer = (state = "Test ", action) => {
    let newState;
    switch (action.type) {
        case actionTypes.CHANGE_TITLE:
            return (newState = action.payload);
        default:
            return state;
    }
};

export default titleReducer;