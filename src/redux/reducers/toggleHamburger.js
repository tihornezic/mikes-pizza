import {ActionTypes} from "../constants/actionTypes"

const initialState = {
    showHamburger: false,
}

export const toggleHamburger = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SHOW_HAMBURGER:
            return {...state, showHamburger: !action.payload}
        case ActionTypes.HIDE_HAMBURGER:
            return {...state, showHamburger: action.payload}
        default:
            return state
    }
}