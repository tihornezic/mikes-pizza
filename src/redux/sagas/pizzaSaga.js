import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

const apiUrl = 'https://mock-pizza-api.herokuapp.com/pizzas'

const getApi = async (id) => {
    try {        
        const {data} = await axios.get(`${apiUrl}/${id}`)

        return data
    } catch (e) { }
}

// worker saga
function* fetchPizza(action) {
    // console.log(action.payload)
    
    try {
        const pizza = yield call(getApi, action.payload)
        yield put({
            type: 'GET_PIZZA_SUCCESS',
            payload: pizza
        })
    } catch (e) {
        yield put({
            type: 'GET_PIZZA_FAILED',
            message: e.message
        })
    }
}

// watcher saga
function* pizzaSaga() {
    yield takeEvery('GET_PIZZA_REQUESTED', fetchPizza)
}

export default pizzaSaga