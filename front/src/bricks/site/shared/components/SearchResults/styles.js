import styled from 'styled-components'

import { g } from '../../../../core'

export const Results = styled.div`
  position: absolute;
  top: ${({ type }) => (type === 'header' ? g(7) : g(10))};
  right: 0;
  left: 0;
  z-index: 1;
`
export const Search = styled.div`
  /* margin: ${g(3)};
  position: relative; */
`
export const SearchField = styled.div`
  /* margin: ${g(3)};
  position: relative; */
`

export const Field = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${g(4)};
`
export const TextField = styled.div`
  flex-grow: 1;
  overflow: hidden;
`

export const Icon = styled.div`
  margin: 0 ${g(2)};
`
