import styled from 'styled-components'
import { g, colors } from '../../bricks/core'

export const Input = styled.div`
  margin-bottom: ${g(1)};

  &:last-child {
    margin-bottom: 0;
  }
`
export const Field = styled.div`
  display: flex;
  align-items: center;
`
