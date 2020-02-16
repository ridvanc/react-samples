import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import titleReducer from "./titleReducer";
import loadingReducer from "./loadingReducer";
import modalLoadingReducer from "./modalLoadingReducer";

const reducers = combineReducers({
    counterReducer,
    titleReducer,
    loadingReducer,
    modalLoadingReducer
});

export default reducers;
