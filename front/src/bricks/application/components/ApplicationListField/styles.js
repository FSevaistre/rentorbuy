import styled, { css } from 'styled-components'

import { colors, g, helpers, tablet } from '../../../core'

export const ListItemParent = styled.div``

export const ListItem = styled.div`
  margin: 0 ${g(-2)};

  @media screen and (min-width: ${tablet.min}) {
    margin: 0;
  }

  ${ListItemParent} + ${ListItemParent} & {
    padding-top: ${g(2)};
  }
`

export const ListItemHeader = styled.div`
  border-radius: 7px 7px 0 0;
  color: ${colors.white};

  @media screen and (min-width: ${tablet.min}) {
    overflow: hidden;
  }
`

export const ListItemHeaderContentAction = styled.div`
  ${({ withCursor }) =>
    withCursor &&
    css`
      cursor: pointer;
    `}

  & + & {
    margin-left: ${g(2)};
  }
`

export const ListItemHeaderContentActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${({ withCursor }) =>
    withCursor &&
    css`
      cursor: pointer;
    `}

  & + ${ListItemHeaderContentAction}, ${ListItemHeaderContentAction} + & {
    margin-left: ${g(3)};
  }
`

export const Add = styled.div`
  border: dashed ${colors.neutral1.fade(20)};
  border-width: 1px 0;
  cursor: pointer;
  transition: all 150ms ease-in;

  @media screen and (min-width: ${tablet.min}) {
    border-radius: ${g(1)};
    border-width: 1px;
  }

  &:hover {
    ${helpers.boxShadow(1)}
  }
}
`

export const AddButton = styled.div`
  margin-right: ${g(2)};
`

export const AddContent = styled.div`
  align-items: center;
  display: flex;
`
