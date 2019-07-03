import styled from 'styled-components'
import { g, colors } from '../../bricks/core'

export const Graph = styled.div`
  width: ${g(50)};
  color: ${colors.neutral1};
  background: ${colors.neutral1.fade(10)};
  margin: 0 ${g(2)};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`
