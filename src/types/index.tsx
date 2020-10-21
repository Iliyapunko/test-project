import { TFunction } from 'i18next'
import { ActionFunctionAny, Action } from 'redux-actions'
import { MainSelector } from 'pages/Main/selector'  

export interface MainProps extends MainSelector {
  t: TFunction
  changeInput: ActionFunctionAny<Action<number>>
  changeRadio: ActionFunctionAny<Action<string>>
  changeSwicth: ActionFunctionAny<Action<boolean>>
}

export interface MainState {
  inputPostfix: string
  summaryVisibility: boolean
  inputVisibility: boolean
}

export interface RadioProps<T> {
  onChange?: (name: T) => void
  buttons: {
    name: T
    text: string
    description?: string
  }[]
}

export interface RadioButtonProps<T> {
  text: string
  name: T
  checked?: boolean
  description?: string
  onClick: (name: T) => void
}

export interface SwitchProps {
  state?: boolean
  leftText?: string
  rightText: string
  onChange?: (currentState: boolean) => void
}

export interface PopupProps {
  text: string
}

export interface InputProps {
  onChange: (value: number) => void
  outsideValue?: string | number
}