import styled from 'styled-components'

import { g } from '../../../../core'

export const Container = styled.div`
  position: relative;
`
export const SearchContainer = styled.div`
  position: relative;
  width: ${g(5)};
  height: ${g(5)};
`

export const SearchBar = styled.div`
  position: absolute;
  top: -4px;
  right: 0;
  width: ${g(50)};
  z-index: 1;
`

export const Icon = styled.span`
  font-size: ${g(2)};
`
