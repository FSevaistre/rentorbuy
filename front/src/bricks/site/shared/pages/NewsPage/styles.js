import styled, { css } from 'styled-components'

import { g, colors, breakpoints } from '../../../../core'

export const Content = styled.div`
  margin-bottom: ${g(8)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${g(12)};
  }
`

export const Page = styled.div``
export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.primary1.default};
  margin-top: ${g(5)};
`
export const Link = styled.div`
  ${({ next }) =>
    next &&
    css`
      margin-left: auto;
    `}
`
export const LinkContent = styled.div`
  display: flex;
  align-items: center;
`
export const Icon = styled.div`
  ${({ previous }) =>
    previous
      ? css`
          margin-right: ${g(2)};
        `
      : css`
          margin-left: ${g(2)};
        `}
`
