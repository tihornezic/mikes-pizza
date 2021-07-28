import {ActionTypes} from "../constants/actionTypes";

export const getPizzas = (pizzas) => {
    return {
        type: ActionTypes.GET_PIZZAS_REQUESTED,
        payload: pizzas
    }
}