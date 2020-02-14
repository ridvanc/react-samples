import * as actionTypes from "./actionTypes";

export const changeTitle = (title) => ({
    type: actionTypes.CHANGE_TITLE,
    payload: title
});