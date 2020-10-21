import ActionTypes from 'actionTypes/main'
import RADIO_BUTTONS from 'constants/radioButtons'
import { DAYS_IN_MONTH, HOURS_IN_DAY } from 'constants/salary'
import { calculateSummary } from 'helpers'
import round from 'lodash/round'

type ChangeRadio = {
  type: ActionTypes.CHANGE_RADIO
  payload: RADIO_BUTTONS
}

type ChangeInput = {
  type: ActionTypes.CHANGE_INPUT
  payload: number
}

type ChangeSwitch = {
  type: ActionTypes.CHANGE_SWITCH
  payload: boolean
}

export type MainActions = ChangeRadio | ChangeInput | ChangeSwitch

export interface MainState {
  readonly inputText: number
  readonly absoluteValue: number
  readonly switchValue: boolean
  readonly selectedRadio: RADIO_BUTTONS
  readonly onHands: number
  readonly tax: number
  readonly cost: number
}

const initialState = {
  inputText: 0,
  switchValue: true,
  selectedRadio: RADIO_BUTTONS.SALARY_FOR_MONTH,
  absoluteValue: 0,
  onHands: 0,
  tax: 0,
  cost: 0,
}

export default function (state = initialState, action: MainActions) {
  switch (action.type) {
    case ActionTypes.CHANGE_RADIO: {
      const selectedRadio = action.payload
      const { absoluteValue } = state

      let newValue
      switch (selectedRadio) {
        case RADIO_BUTTONS.SALARY_FOR_DAY: {
          newValue = absoluteValue / DAYS_IN_MONTH
          break
        }
        case RADIO_BUTTONS.SALARY_FOR_HOUR: {
          newValue = absoluteValue / HOURS_IN_DAY / DAYS_IN_MONTH
          break
        }
        default: {
          newValue = absoluteValue
        }
      }

      newValue = round(newValue)

      return { ...state, selectedRadio, inputText: newValue }
    }

    case ActionTypes.CHANGE_INPUT: {
      const inputText = action.payload
      const { selectedRadio, switchValue } = state

      let absoluteValue
      switch (selectedRadio) {
        case RADIO_BUTTONS.SALARY_FOR_DAY: {
          absoluteValue = inputText * DAYS_IN_MONTH
          break
        }
        case RADIO_BUTTONS.SALARY_FOR_HOUR: {
          absoluteValue = inputText * HOURS_IN_DAY * DAYS_IN_MONTH
          break
        }
        default: {
          absoluteValue = inputText
        }
      }

      const summary = calculateSummary(absoluteValue, switchValue)
      return { ...state, inputText, absoluteValue, ...summary }
    }

    case ActionTypes.CHANGE_SWITCH: {
      const switchValue = action.payload
      const { absoluteValue } = state
      const summary = calculateSummary(absoluteValue, switchValue)

      return { ...state, switchValue, ...summary }
    }

    default: {
      return state
    }
  }
}
