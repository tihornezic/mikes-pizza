import {ActionTypes} from "../constants/actionTypes"

export const setToggleOrder = (order) => {
    return {
        type: ActionTypes.TOGGLE_SHOW_ORDER,
        payload: order
    }
}

export const hideOrder = (bool) => {
    return {
        type: ActionTypes.HIDE_ORDER,
        payload: bool
    }
}

export const setToggleCustomizeOrderModal = (orderModal) => {
    return {
        type: ActionTypes.TOGGLE_SHOW_CUSTOMIZE_ORDER_MODAL,
        payload: orderModal
    }
}

export const setToggleAddressModal = (addressModal) => {
    return {
        type: ActionTypes.TOGGLE_SHOW_ADDRESS_MODAL,
        payload: addressModal
    }
}

export const setOrderAddress = (address) => {
    return {
        type: ActionTypes.SET_ADDRESS,
        payload: address
    }
}

export const annulAddress = () => {
    return {
        type: ActionTypes.ANNUL_ADDRESS
    }
}

export const addPizzaToOrder = (pizza) => {
    return {
        type: ActionTypes.ADD_PIZZA_TO_ORDER,
        payload: pizza
    }
}

export const removePizzaFromOrder = (pizza) => {
    return {
        type: ActionTypes.REMOVE_PIZZA_FROM_ORDER,
        payload: pizza
    }
}

export const annulOrder = () => {
    return {
        type: ActionTypes.ANNUL_ORDER,
        // payload: pizza
    }
}