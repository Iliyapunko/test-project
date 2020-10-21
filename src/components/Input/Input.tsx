import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { InputProps } from 'types'

const Input: FC<InputProps> = ({ outsideValue, onChange }) => {
  const [value, setValue] = useState(outsideValue)

  useEffect(() => {
    if (outsideValue !== value) setValue(outsideValue)
  }, [outsideValue])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value) || 0
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <input className="input" type='text' value={value} onChange={handleChange}/>
  )
}

export default Input
