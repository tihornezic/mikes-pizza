import {ActionTypes} from "../constants/actionTypes"

const initialState = {
    showAddressModal: false,
}

export const toggleAddressModal = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SHOW_ADDRESS_MODAL:
            return {...state, showAddressModal: !action.payload}
        default:
            return state
    }
}