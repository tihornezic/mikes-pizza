import {ActionTypes} from "../constants/actionTypes"

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

// export const setToggleCustomizeOrderModalEdit = (orderModalEdit) => {
//     return {
//         type: ActionTypes.TOGGLE_SHOW_CUSTOMIZE_ORDER_MODAL_EDIT,
//         payload: orderModalEdit
//     }
// }

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