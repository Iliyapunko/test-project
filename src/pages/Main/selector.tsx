import { createStructuredSelector } from 'reselect'
import {
  inputTextSelector,
  switchValueSelector,
  selectedRadioSelector,
  onHandsSelector,
  taxSelector,
  costSelector,
} from 'selectors/main'
import { State } from 'reducers'
import RADIO_BUTTONS from 'constants/radioButtons'

export interface MainSelector {
  inputText: number
  switchValue: boolean
  selectedRadio: RADIO_BUTTONS
  onHands: number
  tax: number
  cost: number
}

export default createStructuredSelector<State, MainSelector>({
  inputText: inputTextSelector,
  switchValue: switchValueSelector,
  selectedRadio: selectedRadioSelector,
  onHands: onHandsSelector,
  tax: taxSelector,
  cost: costSelector,
})
