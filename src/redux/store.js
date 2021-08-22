import {createStore, compose, applyMiddleware} from 'redux'
import {loadState, saveState} from './localStorage'
import throttle from 'lodash/throttle'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/index'
import reducers from './reducers/index.js'

const sagaMiddleware = createSagaMiddleware()

/* eslint-disable no-unused-vars */
const persistedState = loadState()
/* eslint-disable no-unused-vars */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(sagaMiddleware)))
// const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000))

export default store