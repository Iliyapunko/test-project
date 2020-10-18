import React from 'react'
import styles from './Radio.styles'
import { RadioProps } from 'types'

const Radio = ({ checked = false, text, onClick }: RadioProps) => {
  return (
    <div onClick={onClick} css={styles.radio}>
      <div css={styles.button(checked)}>
        <div></div>
      </div>
      <span css={styles.text}>{text}</span>
    </div>
  )
}

export default Radio
