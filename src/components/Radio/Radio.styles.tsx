import { css } from '@emotion/core'
import theme from 'styles/theme'

const { space } = theme

export default {
  radio: () => css`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,

  button: (checked: boolean) => css`
    display: grid;
    place-items: center;
    border: 1px solid #777;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-right: ${space.x1};

    > div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #222;
      display: ${checked ? 'block' : 'none'};
    }
  `,

  text: () => css`
    
  `,
}
