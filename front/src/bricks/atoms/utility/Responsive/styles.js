import styled, { css } from 'styled-components'

export const Responsive = styled.span`
  display: none;

  ${({ minWidth }) =>
    minWidth &&
    css`
      @media screen and (min-width: ${minWidth}) {
        display: initial;
      }
    `}
  ${({ maxWidth }) =>
    maxWidth &&
    css`
      @media screen and (max-width: ${maxWidth}) {
        display: initial;
      }
    `}
`
