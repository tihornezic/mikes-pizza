import {ActionTypes} from "../constants/actionTypes"

export const setToggleSlideMenu = (slideMenu) => {
    return {
        type: ActionTypes.TOGGLE_SHOW_SLIDE_MENU,
        payload: slideMenu
    }
}

export const hideSlideMenu = (bool) => {
    return {
        type: ActionTypes.HIDE_SLIDE_MENU,
        payload: bool
    }
}