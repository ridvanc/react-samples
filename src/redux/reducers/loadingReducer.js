import * as actionTypes from "../actions/actionTypes";

const loadingReducer = (state = false, action) => {
    let newState;
    switch (action.type) {
        case  actionTypes.OPEN_LOADING:
            return (newState = action.payload);
        case  actionTypes.CLOSE_LOADING:
            return (newState = action.payload);
        default:
            return state;
    }
};
export default loadingReducer;