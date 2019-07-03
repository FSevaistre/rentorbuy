import styled from 'styled-components'

import { g, breakpoints } from '../../../../core'

export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${g(3)};

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-top: ${g(7)};
    margin-bottom: ${g(4)};
  }
`
