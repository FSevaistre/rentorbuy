import styled, { css } from 'styled-components'

import { colors, g, layout, tablet } from '../../../core'

export const Item = styled.div`
  height: ${g(7)};
`

export const Arrow = styled(Item)`
  align-items: center;
  background: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  font: inherit;
  height: ${g(7)};
  margin-right: ${g(2)};
`

export const Breadcrumb = styled.div`
  position: relative;

  &:before {
    background-color: ${colors.neutral1.fade(20)};
    bottom: 0;
    content: '';
    height: ${g(1 / 4)};
    left: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`

export const BreadcrumbItem = styled(Item)`
  align-items: center;
  display: flex;
  margin: 0 ${g(1)};
  border-bottom: ${g(1 / 4)} solid transparent;
  transition: border-bottom-color 400ms ease-out, color 400ms ease-out;

  &:hover {
    border-bottom-color: ${colors.primary1.default};
    color: ${colors.primary1.default};
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom-color: ${colors.primary1.default};
      color: ${colors.primary1.default};
    `}
`

export const Wrapper = styled.div`
  display: flex;

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
