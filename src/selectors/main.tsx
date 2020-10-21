import { createSelector } from 'reselect'
import get from 'lodash/get'
import { State } from 'reducers'
import { MainState } from 'reducers/main'

export const mainSelector = (state: State) => get(state, 'main')

export const inputTextSelector = createSelector(mainSelector, (main: MainState) => main.inputText)
export const switchValueSelector = createSelector(mainSelector, (main: MainState) => main.switchValue)
export const selectedRadioSelector = createSelector(mainSelector, (main: MainState) => main.selectedRadio)
export const onHandsSelector = createSelector(mainSelector, (main: MainState) => main.onHands)
export const taxSelector = createSelector(mainSelector, (main: MainState) => main.tax)
export const costSelector = createSelector(mainSelector, (main: MainState) => main.cost)


