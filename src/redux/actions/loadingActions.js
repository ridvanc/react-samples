import * as actionTypes from "./actionTypes"

export const openLoading = () => ({
    type: actionTypes.OPEN_LOADING,
    payload: true
});

export const closeLoading = () => ({
    type: actionTypes.CLOSE_LOADING,
    payload: false
});