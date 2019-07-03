import styled from 'styled-components'

import { colors, g } from '../../../../core'

export const Badge = styled.div`
  align-items: center;
  background-color: ${({ variant }) => colors[variant]};
  border: ${g(1 / 2)} solid ${colors.white};
  border-radius: ${g(8)};
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  height: ${g(8)};
  margin-bottom: ${g(3)};
  margin-top: ${g(-4 - 1 / 2)};
  width: ${g(8)};
`

export const Content = styled.div`
  align-items: center;
  background-color: ${colors.neutral1.light};
  display: flex;
  flex-direction: column;
  margin-bottom: ${g(-16)};
  margin-top: ${g(4)};
  padding-bottom: ${g(20)};
`

export const Hat = styled.div``
