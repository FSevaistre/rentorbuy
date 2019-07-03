import styled from 'styled-components'

import { g, tablet } from '../../../core'

export const Fields = styled.div`
  display: flex;
`

export const FlexibleField = styled.div`
  flex-grow: 1;
`

export const FixedField = styled.div`
  flex-basis: 40%;
  max-width: 40%;

  @media only screen and (min-width: ${tablet.min}) {
    flex-basis: 30%;
    max-width: 30%;
  }

  @media only screen and (min-width: ${tablet.max}) {
    flex-basis: 20%;
    max-width: 20%;
  }

  ${FlexibleField} + &,
  & + & {
    margin-left: ${g(1)};
  }
`
