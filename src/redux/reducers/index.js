import {combineReducers} from 'redux'
import {pizzasReducer} from './pizzasReducer'

const reducers = combineReducers({
    pizzas: pizzasReducer
})

export default reducers