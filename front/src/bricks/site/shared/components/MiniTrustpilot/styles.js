import styled from 'styled-components'

import { g } from '../../../../core'

export const Rate = styled.div`
  margin-left: ${g(2)};
`

export const Rating = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: ${g(1)};
`

export const Trustpilot = styled.a`
  text-align: center;

  &:focus {
    outline: 0px transparent;
  }
`
