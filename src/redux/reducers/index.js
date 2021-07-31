import {combineReducers} from 'redux'
import {pizzasReducer} from './pizzasReducer'
import {toggleOrderReducer} from './toggleOrderReducer'
import {orderReducer} from './orderReducer'

const reducers = combineReducers({
    pizzas: pizzasReducer,
    showOrder: toggleOrderReducer,
    order: orderReducer
})

export default reducers