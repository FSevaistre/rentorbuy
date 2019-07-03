import styled from 'styled-components'

import { g, tablet } from '../../../core'

export const Button = styled.div`
  margin-top: ${g(5)};

  @media only screen and (min-width: ${tablet.min}) {
    margin-left: ${g(7)};
  }
`
