import styled, { css } from 'styled-components'

import { colors, g, layout, tablet } from '../../../core'

export const Alert = styled.div`
  border-bottom: 1px solid ${colors.neutral1.fade(20)};
  border-top: 1px solid ${colors.neutral1.fade(20)};
  text-align: center;

  @media only screen and (min-width: ${tablet.min}) {
    border: 1px solid ${colors.neutral1.fade(20)};
    border-radius: ${g(1 / 2)};
  }
`

export const Documents = styled.div`
  padding-bottom: ${g(2)};

  @media only screen and (min-width: ${tablet.min}) {
    padding-bottom: ${g(7)};
  }
`

export const EditFilters = styled.button`
  background: none;
  border: none;
  color: ${colors.accent1.default};
  cursor: pointer;
  font: inherit;
  margin-top: ${g(1)};

  &:focus,
  &:hover {
    outline: 0px transparent;
    text-decoration: underline;
  }
`

export const Filters = styled.div`
  overflow: auto;
  padding: ${g(2)};
  -webkit-overflow-scrolling: touch;

  @media only screen and (min-width: ${tablet.min}) {
    overflow: visible;
    padding: ${g(5)} 0 ${g(3)};
  }
`

export const List = styled.div`
  border-bottom: 1px solid ${colors.neutral1.fade(20)};
  border-top: 1px solid ${colors.neutral1.fade(20)};

  & + & {
    border-top: none;
  }

  @media only screen and (min-width: ${tablet.min}) {
    border: none;

    & + & {
      margin-top: ${g(2)};
    }
  }
`

export const Wrapper = styled.div`
  ${({ full }) =>
    !full &&
    css`
      margin: 0 ${g(2)};
    `}

  @media only screen and (min-width: ${tablet.min}) {
    margin: 0 ${g(3)};
  }

  @media only screen and (min-width: ${layout.desktop.default}) {
    margin: 0 auto;
    max-width: ${layout.desktop.default};
    padding: 0 ${g(3)};
  }
`
