import {all} from 'redux-saga/effects'
import pizzasSaga from './pizzasSaga'
import pizzaSaga from './pizzaSaga'

export default function* rootSaga() {
    yield all([
        pizzasSaga(),
        pizzaSaga()
    ])
}