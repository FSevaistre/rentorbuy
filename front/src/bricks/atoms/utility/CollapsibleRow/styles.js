import styled, { css } from 'styled-components'

export const RowTransition = styled.div`
  opacity: 1;
  transition: height 300ms ease-in-out 0s, opacity 250ms ease-in-out 250ms;

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      opacity: 0;
      transition: height 300ms ease-in-out 200ms, opacity 250ms ease-in-out 0s;
    `}
`
