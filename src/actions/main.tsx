import { createAction } from 'redux-actions'
import ActionTypes from 'actionTypes/main'

export const changeRadio = createAction(ActionTypes.CHANGE_RADIO)
export const changeInput = createAction(ActionTypes.CHANGE_INPUT)
export const changeSwicth = createAction(ActionTypes.CHANGE_SWITCH)
