import {ActionTypes} from "../constants/actionTypes"

const initialState = {
    showAuthModal: false,
}

export const toggleAuthModal = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SHOW_AUTH_MODAL:
            return {...state, showAuthModal: !action.payload}
        default:
            return state
    }
}