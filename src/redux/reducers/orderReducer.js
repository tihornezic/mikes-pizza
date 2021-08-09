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
        case ActionTypes.REMOVE_PIZZA_FROM_ORDER:
            
            let newOrder = [...state.order]

            const index = state.order.findIndex((orderItem) => orderItem.id === action.payload.id)

            if (index >= 0) {
                newOrder.splice(index, 1)
            } else {
                console.warn(
                    `Can't remove product id: ${action.payload.id} as it's not in the basket!`
                )
            }

            return {...state, order: newOrder}

        default:
            return state
    }
}