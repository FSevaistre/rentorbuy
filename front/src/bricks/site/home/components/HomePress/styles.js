import styled from 'styled-components'
import { g, breakpoints } from '../../../../core'

export const PressWrapper = styled.div`
  text-align: center;
  overflow: auto;
`

export const PressLogo = styled.li`
  padding-right: ${g(2)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding-right: 0;
  }

  & + & {
    @media only screen and (min-width: ${breakpoints.tablet}) {
      margin-left: ${g(2)};
    }
  }
`

export const Press = styled.ul`
  display: inline-flex;
  overflow: auto;
  padding: 0 ${g(2)};

  img {
    display: block;
    height: ${g(5)};
    width: auto;
  }
`
