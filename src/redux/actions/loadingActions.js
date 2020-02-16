import * as actionTypes from "./actionTypes"

export const openLoading = () => ({
    type: actionTypes.OPEN_LOADING,
    payload: true
});

export const closeLoading = () => ({
    type: actionTypes.CLOSE_LOADING,
    payload: false
});
export const openModalLoading = () => ({
    type: actionTypes.OPEN_MODAL_LOADING,
    payload: true
});

export const closeModalLoading = () => ({
    type: actionTypes.CLOSE_MODAL_LOADING,
    payload: false
});