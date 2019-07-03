import styled, { css } from 'styled-components'

import { colors, g } from '../../../core'

const primary = colors['primary-1']
export const Container = styled.div`
  position: relative;
  width: ${g(2)};
  height: ${g(2)};
  border-radius: 100%;
  background: ${primary};
  color: ${colors.white};
  border: 1px solid ${primary};
  overflow: hidden;

  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          border-width: ${g(1 / 4)};
          height: ${g(5)};
          font-size: 38px;
          width: ${g(5)};
        `

      default:
        return ''
    }
  }}
`

export const Icon = styled.div`
  position: absolute;
  right: 0;
  bottom: -3px;
  left: 0;

  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          bottom: -5px;
        `

      default:
        return ''
    }
  }}
`
