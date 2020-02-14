import * as actionTypes from "./actionTypes"

export const openLoading = () => ({
    type: actionTypes.OPEN_LOADING,
    payload: false
});

export const closeLoading = () => ({
    type: actionTypes.CLOSE_LOADING,
    payload: true
});