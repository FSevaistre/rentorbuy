import styled, { css } from 'styled-components'
import { g, breakpoints } from '../../../core'

export const Container = styled.div`
  margin: 0 ${g(2)};
  position: relative;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin: 0 ${g(10)};
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    max-width: ${g(83)};
    margin: 0 auto;
  }

  ${({ full }) =>
    !full &&
    css`
      @media only screen and (min-width: ${breakpoints.tablet}) {
        padding: 0 ${g(3)};
      }
    `}
`
