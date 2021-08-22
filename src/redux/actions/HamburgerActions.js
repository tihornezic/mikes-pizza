import {ActionTypes} from "../constants/actionTypes"

export const setToggleHamburger = (hamburger) => {
    return {
        type: ActionTypes.TOGGLE_SHOW_HAMBURGER,
        payload: hamburger
    }
}

export const hideHamburger = (bool) => {
    return {
        type: ActionTypes.HIDE_HAMBURGER,
        payload: bool
    }
}