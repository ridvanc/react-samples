import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import titleReducer from "./titleReducer";
import loadingReducer from "./loadingReducer";

const reducers = combineReducers({
    counterReducer,
    titleReducer,
    loadingReducer
});

export default reducers;
