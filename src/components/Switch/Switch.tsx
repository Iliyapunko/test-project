import React, { FC, useState } from 'react'
import { SwitchProps } from 'types'
import noop from 'lodash/noop'
import classnames from 'classnames'
const Switch: FC<SwitchProps> = ({ state = true, leftText = '', rightText, onChange = noop, id }) => {
  const [checked, setChecked] = useState(state)

  const handleSwitchChange = () => {
    const newState = !checked
    setChecked(newState)
    onChange(newState)
  }

  const switchClassName = classnames('switch', {'switch--checked': checked})

  return (
    <div className={switchClassName} onClick={handleSwitchChange}>
      <span onClick={handleSwitchChange} className='switch__text switch__text--left'>{leftText}</span>

      <div className='switch__button'>
        <div className='switch__slider'>
        </div>
      </div>

      <span onClick={handleSwitchChange} className='switch__text switch__text--right'>{rightText}</span>
    </div>
  )
}

export default Switch
