import {ActionTypes} from "../constants/actionTypes";

const initialState = {
    showOrder: false
}

export const toggleOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SHOW_ORDER:
            return {...state, showOrder: !action.payload}
        default:
            return state
    }
}