import {ActionTypes} from "../constants/actionTypes";

export const setToggleOrder = (order) => {
    return {
        type: ActionTypes.TOGGLE_SHOW_ORDER,
        payload: order
    }
}

export const setToggleCustomizeOrderModal = (orderModal) => {
    return {
        type: ActionTypes.TOGGLE_SHOW_CUSTOMIZE_ORDER_MODAL,
        payload: orderModal
    }
}

export const addPizzaToOrder = (pizza) => {
    return {
        type: ActionTypes.ADD_PIZZA_TO_ORDER,
        payload: pizza
    }
}