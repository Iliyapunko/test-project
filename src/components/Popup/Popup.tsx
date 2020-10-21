import React, { FC, useState } from 'react'
import { PopupProps } from 'types'
import classnames from 'classnames'

const Popup: FC<PopupProps> = ({ text }) => {
  const [mouseOver, setMouseOver] = useState(false)
  const [selected, setSelected] = useState(false)

  const crossClassName = classnames({
    popup__cross: true,
    'popup__cross--selected': selected,
  })

  const handleClick = () => {
    setSelected(!selected)
  }

  const handleMouseLeave = () => {
    setMouseOver(false)
  }

  const handleMouseOver = () => {
    setMouseOver(true)
  }

  return (
    <div
      className="popup"
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className={crossClassName}>
        <div className="popup__left_cross"></div>
        <div className="popup__right_cross"></div>
      </div>
      {(mouseOver || selected) && (
        <div className="popup_modal">
          <div className="popup_modal__tail"></div>
          <div className="popup_modal__body">{text}</div>
        </div>
      )}
    </div>
  )
}

export default Popup
