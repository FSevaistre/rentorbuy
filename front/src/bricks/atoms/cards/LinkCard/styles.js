import styled from 'styled-components'

import { g } from '../../../core'

export const Content = styled.div`
  position: relative;
  height: 100%;
  padding-bottom: ${g(10)};
`

export const Title = styled.div`
  display: flex;
  margin-bottom: ${g(2)};
`

export const Emoji = styled.div`
  margin-right: ${g(2)};
`

export const Button = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`
