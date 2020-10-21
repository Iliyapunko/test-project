import React, { FC, useEffect, useState } from 'react'
import { RadioProps } from 'types'
import RadioButton from './RadioButton'
import noop from 'lodash/noop'

function Radio<T extends string>({ buttons, onChange = noop }: RadioProps<T>) {
  const [checked, setChecked] = useState(buttons[0].name)

  useEffect(() => {
    onChange(checked)
  }, [checked])

  return (
    <div className="radio">
      {buttons.map(({ name, text, description }) => {
        return (
          <RadioButton
            key={name}
            text={text}
            name={name}
            onClick={setChecked}
            description={description}
            checked={name === checked}
          />
        )
      })}
    </div>
  )
}

export default Radio
