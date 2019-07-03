import styled from 'styled-components'

import { colors, g } from '../../../../core'

export const Container = styled.div`
  padding: ${g(2)} 0;
  background-color: ${colors.neutral1.light};
`

export const Breadcrumbs = styled.ul`
  color: ${colors.neutral1.fade(60)};
`

export const Elem = styled.li`
  display: inline-flex;
  align-items: center;
`

export const Icon = styled.span`
  font-size: 10px;
  margin: 0 ${g(2)};
`
