import React from 'react'
import { RadioButtonProps } from 'types'
import classnames from 'classnames'
import Popup from 'components/Popup'

function RadioButton<T extends string>({
  checked = false,
  text,
  onClick,
  name,
  description,
}: RadioButtonProps<T>) {
  const buttonClassName = classnames({
    radioButton__button: true,
    'radioButton__button--checked': checked,
  })

  const handleClick = () => {
    onClick(name)
  }

  return (
    <div className="radioButton">
      <div onClick={handleClick} className={buttonClassName}>
        <div></div>
      </div>
      <span onClick={handleClick}>{text}</span>
      {description && <Popup text={description} />}
    </div>
  )
}

export default RadioButton
