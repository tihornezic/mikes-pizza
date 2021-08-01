import {combineReducers} from 'redux'
import {pizzasReducer} from './pizzasReducer'
import {pizzaReducer} from './pizzaReducer'
import {toggleOrderReducer} from './toggleOrderReducer'
import {orderReducer} from './orderReducer'
import {toggleCustomizeOrderModal} from './toggleCustomizeOrderModal'

const reducers = combineReducers({
    pizzas: pizzasReducer,
    pizza: pizzaReducer,
    showOrder: toggleOrderReducer,
    order: orderReducer,
    showCustomizeOrderModal: toggleCustomizeOrderModal
})

export default reducers