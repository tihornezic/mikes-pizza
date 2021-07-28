import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

const apiUrl = 'https://mock-pizza-api.herokuapp.com/pizzas'

const getApi = async () => {
    try {
        const {data} = await axios.get(apiUrl)

        return data
    } catch (e) { }
}

// worker saga
function* fetchPizzas(action) {
    try {
        const pizzas = yield call(getApi)
        yield put({
            type: 'GET_PIZZAS_SUCCESS',
            payload: pizzas
        })
    } catch (e) {
        yield put({
            type: 'GET_PIZZAS_FAILED',
            message: e.message
        })
    }
}

// watcher saga
function* pizzasSaga() {
    yield takeEvery('GET_PIZZAS_REQUESTED', fetchPizzas)
}

export default pizzasSaga