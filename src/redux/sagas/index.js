import {all} from 'redux-saga/effects'
import pizzasSaga from './pizzasSaga'

export default function* rootSaga() {
    yield all([
        pizzasSaga(),
    ])
}