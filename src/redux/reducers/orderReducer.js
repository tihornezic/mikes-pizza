import {ActionTypes} from "../constants/actionTypes";

const initialState = {
    order: []
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PIZZA_TO_ORDER:
            return {
                ...state, order: [...state.order, action.payload]
            }
        default:
            return state
    }
}