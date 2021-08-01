import {ActionTypes} from "../constants/actionTypes";

const initialState = {
    showCustomizeOrderModal: false
}

export const toggleCustomizeOrderModal = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SHOW_CUSTOMIZE_ORDER_MODAL:
            return {...state, showCustomizeOrderModal: !action.payload}
        default:
            return state
    }
}