import styled from 'styled-components'

import { g, breakpoints } from '../../../../core'

export const Attachment = styled.div`
  & + & {
    margin-top: ${g(2)};
  }
`

export const Attachments = styled.div`
  margin-top: ${g(4)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin: ${g(4)} ${g(-3 / 2)};
  }
`

export const Back = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: ${g(5)};
`

export const Content = styled.div`
  margin-bottom: ${g(8)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${g(12)};
  }
`

export const Page = styled.div`
  margin-bottom: ${g(10)};
`
