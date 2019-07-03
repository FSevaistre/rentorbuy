import styled from 'styled-components'

import { g, breakpoints, layout } from '../../../core'

export const Messages = styled.div`
  margin: ${g(2)} 0 ${g(4)};
  @media screen and (min-width: ${layout.tablet.min}) {
    margin: ${g(5)} 0;
  }
`
export const Message = styled.div`
  margin-bottom: ${({ isLast }) => (isLast ? 0 : g(1))};
`

export const Content = styled.div`
  margin-bottom: ${g(2)};
  @media screen and (min-width: ${layout.tablet.min}) {
    margin-bottom: ${g(5)};
    margin-left: ${g(7)};
    max-width: ${breakpoints.mobileL};
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: ${layout.tablet.min}) {
    display: block;
    justify-content: initial;
  }
`
