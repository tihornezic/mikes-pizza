import {ActionTypes} from "../constants/actionTypes";

const initialState = {
    pizza: [],
}

export const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_PIZZA:
            return {
                ...state, pizza: action.payload
            }
        default:
            return state
    }
}