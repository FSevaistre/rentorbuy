import styled from 'styled-components'

import { colors, g, tablet } from '../../../core'

export const Row = styled.div`
  display: flex;
  padding: ${g(2)};
`

export const RowAction = styled.div`
  align-self: center;
  margin-left: ${g(3)};
`

export const RowLabel = styled.div`
  flex-grow: 1;

  @media only screen and (min-width: ${tablet.min}) {
    display: flex;
    justify-content: space-between;
  }
`

export const RowStatus = styled.div`
  margin-right: ${g(2)};
`

export const RowTag = styled.div`
  margin-top: ${g(1)};

  @media only screen and (min-width: ${tablet.min}) {
    margin-left: ${g(2)};
    margin-top: 0;
  }
`

export const Header = styled(Row)`
  align-items: center;
  background-color: ${colors.neutral1.light};
`

export const HeaderIcon = styled.div`
  margin-right: ${g(2)};
`

export const List = styled.div`
  overflow: hidden;

  @media only screen and (min-width: ${tablet.min}) {
    border: 1px solid ${colors.neutral1.fade(20)};
    border-radius: ${g(0.5)};
  }
`
