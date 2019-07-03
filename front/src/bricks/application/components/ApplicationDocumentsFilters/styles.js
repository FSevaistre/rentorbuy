import styled, { css } from 'styled-components'

import { colors, g, layout, tablet } from '../../../core'

export const Footer = styled.footer`
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.8) 80%,
    rgba(255, 255, 255, 0) 100%
  );
  bottom: 0;
  left: 0;
  padding: ${g(2)};
  position: sticky;
  right: 0;

  @media only screen and (min-width: ${tablet.min}) {
    background: none;
    padding: ${g(2)} 0;
    position: static;
    text-align: right;
  }
`

export const Column = styled.div`
  @media only screen and (min-width: ${tablet.min}) {
    flex-basis: ${({ columns }) => 100 / columns}%;
    max-width: ${({ columns }) => 100 / columns}%;
  }
`

export const Columns = styled.div`
  background-color: ${colors.white};

  @media only screen and (min-width: ${tablet.min}) {
    border-bottom: 1px solid ${colors.neutral1.fade(20)};
    display: flex;
    margin-top: ${g(-5)};
  }
`

export const Controller = styled.div`
  display: flex;
`

export const ControllerAction = styled.button`
  align-items: center;
  background: none;
  border: 1px solid ${colors.neutral1.fade(20)};
  border-radius: ${g(0.5)};
  color: inherit;
  cursor: pointer;
  display: flex;
  font: inherit;
  margin-right: ${g(2)};
  padding: ${g(0.5)} ${g(1)};
  transition: background-color 400ms ease-out;

  &:focus,
  &:hover {
    background-color: ${colors.neutral1.light};
    outline: 0 transparent;
  }
`

export const ControllerActionArrow = styled.span`
  font-size: ${g(1)};
  margin-left: ${g(3)};
`

export const ControllerActionIcon = styled.span`
  margin-right: ${g(2)};
`

export const Header = styled.header`
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.neutral1.fade(20)};
  left: 0;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 1;

  @media only screen and (min-width: ${tablet.min}) {
    background-color: ${colors.neutral1.light};
    border: none;
    padding: ${g(1)} 0 ${g(8.5)};
    position: static;
  }
`

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
`

export const HeaderClose = styled.button`
  background: none;
  color: inherit;
  cursor: pointer;
  font-size: ${g(2)};
  padding: ${g(2)};

  &:focus {
    outline: 0 transparent;
  }

  @media only screen and (min-width: ${tablet.min}) {
    margin-left: ${g(-1.5)};
    margin-right: ${g(1.5)};
    padding: ${g(1.5)};
  }
`

export const HeaderTitle = styled.div`
  flex-grow: 1;
  padding-right: ${g(6)};
  text-align: center;

  @media only screen and (min-width: ${tablet.min}) {
    text-align: left;
  }
`

export const Option = styled.li`
  padding-left: ${g(4)};
  position: relative;

  ${({ checked }) =>
    checked &&
    css`
      font-weight: 700;
    `}

  & + & {
    margin-top: ${g(3)};
  }

  input {
    cursor: pointer;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    width: 100%;
    top: 0;
  }
`

export const OptionCheckMark = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  left: 0;
  position: absolute;
  top: 0;
`

export const OptionTitle = styled.div`
  background-color: ${colors.neutral1.light};
  padding: ${g(2)};

  @media only screen and (min-width: ${tablet.min}) {
    padding: 0;
    padding-bottom: ${g(2)};
  }
`

export const Options = styled.ul`
  padding: ${g(4)} ${g(2)} ${g(3)};

  @media only screen and (min-width: ${tablet.min}) {
    padding: ${g(4)} 0 ${g(3)};
  }
`

export const Overlay = styled.div`
  background-color: ${colors.neutral1.fade(80)};
  bottom: 0;
  content: '';
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  transition: opacity 300ms ease-in-out;
  top: 0;
  z-index: 998;

  @media only screen and (min-width: ${tablet.min}) {
    top: ${g(8)};
  }

  ${({ isEntered }) =>
    isEntered &&
    css`
      opacity: 1;
    `}
`

export const Panel = styled.div`
  background-color: ${colors.white};
  bottom: 0;
  left: 0;
  opacity: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
  transform: translateY(-2em);
  width: 100%;
  z-index: 999;
  -webkit-overflow-scrolling: touch;

  @media only screen and (min-width: ${tablet.min}) {
    top: ${g(8)};
    transform: translateY(2em);
  }

  ${({ isEntered }) =>
    isEntered &&
    css`
      opacity: 1;
      transform: translateY(0);

      @media only screen and (min-width: ${tablet.min}) {
        transform: translateY(0);
      }
    `}
`

export const Tag = styled.div`
  background-color: ${colors.accent1.light};
  border-radius: ${g(0.5)};
  display: table;
  padding: ${g(0.5)} ${g(1)};
  white-space: nowrap;

  & + & {
    margin-left: ${g(1)};
  }
`

export const Tags = styled.div`
  display: flex;
  padding-right: ${g(2)};
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
