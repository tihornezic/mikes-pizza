import {combineReducers} from 'redux'
import {pizzasReducer} from './pizzasReducer'
import {pizzaReducer} from './pizzaReducer'
import {toggleOrderReducer} from './toggleOrderReducer'
import {orderReducer} from './orderReducer'
import {toggleCustomizeOrderModal} from './toggleCustomizeOrderModal'
import {toggleAuthModal} from './toggleAuthModal'
import {toggleAddressModal} from './toggleAddressModal'

const reducers = combineReducers({
    pizzas: pizzasReducer,
    pizza: pizzaReducer,
    showOrder: toggleOrderReducer,
    order: orderReducer,
    showCustomizeOrderModal: toggleCustomizeOrderModal,
    showAuthModal: toggleAuthModal,
    showAddressModal: toggleAddressModal
})

export default reducers