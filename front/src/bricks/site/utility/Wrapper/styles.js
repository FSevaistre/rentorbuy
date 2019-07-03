import styled, { css } from 'styled-components'
import { g, breakpoints } from '../../../core'

export const Wrapper = styled.div`
  ${({ full }) =>
    !full &&
    css`
      margin: 0 ${g(2)};

      @media only screen and (min-width: ${breakpoints.tablet}) {
        margin: 0 ${g(3)};
      }
    `}

  @media only screen and (min-width: ${breakpoints.laptop}) {
    margin: 0 ${g(7)};
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    max-width: ${breakpoints.desktop};
    margin: 0 auto;
    padding: 0 ${g(7)};
  }
`
