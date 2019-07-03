import styled from 'styled-components'

import { breakpoints } from '../../../../core'

export const Cities = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const City = styled.li`
  flex-basis: 100%;

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-basis: 50%;
  }
  @media screen and (min-width: ${breakpoints.laptop}) {
    flex-basis: 33.33%;
  }
`
