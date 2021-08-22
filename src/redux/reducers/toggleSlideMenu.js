import {ActionTypes} from "../constants/actionTypes"

const initialState = {
    showSlideMenu: false,
}

export const toggleSlideMenu = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SHOW_SLIDE_MENU:
            return {...state, showSlideMenu: !action.payload}
        case ActionTypes.HIDE_SLIDE_MENU:
            return {...state, showSlideMenu: action.payload}
        default:
            return state
    }
}