import { TFunction } from 'i18next'

export interface DashboardProps {

}

export interface RadioProps {
  checked?: boolean,
  text: string,
  onClick: () => void
}

export interface SwitchProps {
  state?: boolean,
  leftText?: string,
  rightText?: string,
  onChange?: (currentState: boolean) => void
}

export interface FormProps {
  t: TFunction
}