import React from 'react'
import { css } from '@emotion/core'
import Radio from 'components/Radio'
import Input from 'components/Input'
import Switch from 'components/Switch'
import { FormProps } from 'types'

const style = () => css`
`

const Form = ({t}: FormProps) => {
  return <div>
    <Radio onClick={() => {console.log('🔥')}} text={t('main:salaryForMonth')} />
    <Radio onClick={() => {console.log('🔥')}} text={t('main:minimumSalary')} />
    <Radio onClick={() => {console.log('🔥')}} text={t('main:salaryForDay')} />
    <Radio onClick={() => {console.log('🔥')}} text={t('main:salaryForHour')} />
    <Input />
    <Switch />
  </div>
}

export default Form
