import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import titleReducer from "./titleReducer";

const reducers = combineReducers({
    counterReducer,
    titleReducer
});

export default reducers;
