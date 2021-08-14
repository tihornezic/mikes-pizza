import {ActionTypes} from "../constants/actionTypes"

export const setToggleAuthModal = (modal) => {
    return {
        type: ActionTypes.TOGGLE_SHOW_AUTH_MODAL,
        payload: modal
    }
}