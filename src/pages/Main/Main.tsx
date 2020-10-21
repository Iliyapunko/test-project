import React, { PureComponent } from 'react'
import { MainProps, MainState } from 'types'
import Radio from 'components/Radio'
import Switch from 'components/Switch'
import RADIO_BUTTONS from 'constants/radioButtons'
import Input from 'components/Input'

export default class Main extends PureComponent<MainProps, MainState> {
  readonly initialState = {
    inputPostfix: '₽',
    summaryVisibility: true,
    inputVisibility: true,
  }

  constructor(props: MainProps) {
    super(props)
    this.state = this.initialState
  }

  getRadioButtons = () => {
    const { t } = this.props

    return [
      { name: RADIO_BUTTONS.SALARY_FOR_MONTH, text: t(`main:${[RADIO_BUTTONS.SALARY_FOR_MONTH]}`) },
      {
        name: RADIO_BUTTONS.MINIMUM_SALARY,
        text: t(`main:${[RADIO_BUTTONS.MINIMUM_SALARY]}`),
        description: t('main:minimumSalaryPopup'),
      },
      { name: RADIO_BUTTONS.SALARY_FOR_DAY, text: t(`main:${[RADIO_BUTTONS.SALARY_FOR_DAY]}`) },
      { name: RADIO_BUTTONS.SALARY_FOR_HOUR, text: t(`main:${[RADIO_BUTTONS.SALARY_FOR_HOUR]}`) },
    ]
  }

  handleSwitchChange = (currentState: boolean) => {
    const { changeSwicth } = this.props
    changeSwicth(currentState)
  }

  handleRadioChange = (name: RADIO_BUTTONS) => {
    const defaultInputPostfix = this.initialState.inputPostfix
    const { t, changeRadio } = this.props

    changeRadio(name)

    switch (name) {
      case RADIO_BUTTONS.SALARY_FOR_MONTH: {
        this.setState({
          inputPostfix: defaultInputPostfix,
          summaryVisibility: true,
          inputVisibility: true,
        })
        break
      }
      case RADIO_BUTTONS.MINIMUM_SALARY: {
        this.setState({
          inputPostfix: defaultInputPostfix,
          summaryVisibility: false,
          inputVisibility: false,
        })
        break
      }
      case RADIO_BUTTONS.SALARY_FOR_DAY: {
        this.setState({
          inputPostfix: `${defaultInputPostfix} ${t('main:inDay')}`,
          summaryVisibility: false,
          inputVisibility: true,
        })
        break
      }
      case RADIO_BUTTONS.SALARY_FOR_HOUR: {
        this.setState({
          inputPostfix: `${defaultInputPostfix} ${t('main:inHour')}`,
          summaryVisibility: false,
          inputVisibility: true,
        })
        break
      }
      default: {
        this.setState({ inputPostfix: defaultInputPostfix })
      }
    }

    if (name === RADIO_BUTTONS.SALARY_FOR_MONTH) {
      this.setState({ summaryVisibility: true })
    } else {
      this.setState({ summaryVisibility: false })
    }
  }

  handleInputChange = (number: number) => {
    const { changeInput } = this.props
    changeInput(number)
  }

  render() {
    const { getRadioButtons, handleSwitchChange, handleRadioChange, handleInputChange } = this
    const { t, inputText, onHands, cost, tax } = this.props
    const { summaryVisibility, inputPostfix, inputVisibility } = this.state

    return (
      <div className="main">
        <span className="main__title">{t('main:summary')}</span>
        <Radio<RADIO_BUTTONS> buttons={getRadioButtons()} onChange={handleRadioChange} />
        <Switch
          leftText={t('main:withTax')}
          rightText={t('main:withoutTax')}
          onChange={handleSwitchChange}
        />

        {inputVisibility && (
          <>
            <Input outsideValue={inputText} onChange={handleInputChange} />
            <span>{inputPostfix}</span>
          </>
        )}

        {summaryVisibility && (
          <div className="summary">
            <p>
              <strong>{`${onHands} ₽ `}</strong>
              <span>{t('main:onHands')}</span>
            </p>
            <p>
              <strong>{`${tax} ₽ `}</strong>
              <span>{t('main:tax')}</span>
            </p>
            <p>
              <strong>{`${cost} ₽ `}</strong>
              <span>{t('main:cost')}</span>
            </p>
          </div>
        )}
      </div>
    )
  }
}
