import {ActionTypes} from "../constants/actionTypes";

const initialState = {
    pizzas: [],
    loading: false,
    error: null
}

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_PIZZAS_REQUESTED:
            return {...state, loading: true}
        case ActionTypes.GET_PIZZAS_SUCCESS:
            return {...state, loading: false, pizzas: action.payload}
        case ActionTypes.GET_PIZZAS_FAILED:
            return {...state, loading: false, error: action.message}
        default:
            return state
    }
}