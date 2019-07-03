import styled from 'styled-components'

import { g, colors, breakpoints } from '../../../../core'

export const Page = styled.div``
export const Content = styled.div`
  margin-bottom: ${g(8)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${g(12)};
  }
`

export const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary1.default};
  margin-top: ${g(5)};
`
export const Icon = styled.div`
  margin-right: ${g(2)};
`
