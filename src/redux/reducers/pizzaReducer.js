import {ActionTypes} from "../constants/actionTypes";

const initialState = {
    pizza: {},
    loading: false,
    error: null
}

export const pizzaReducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case ActionTypes.GET_PIZZA:
    //         return {
    //             ...state, pizza: action.payload
    //         }
    //     default:
    //         return state
    // }

    switch (action.type) {
        case ActionTypes.GET_PIZZA_REQUESTED:
            return {...state, loading: true}
        case ActionTypes.GET_PIZZA_SUCCESS:
            return {...state, loading: false, pizza: action.payload}
        case ActionTypes.GET_PIZZA_FAILED:
            return {...state, loading: false, error: action.message}
        default:
            return state
    }
}