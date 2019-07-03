import styled, { css } from 'styled-components'

import { g, colors, helpers, breakpoints, fonts } from '../../../../core'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: ${g(7)};

  @media screen and (min-width: ${breakpoints.tablet}) {
    position: relative;
    height: ${g(11)};
    z-index: 10;
  }
`

export const Logo = styled.div`
  margin-right: ${g(1)};

  a {
    display: block;
  }
`
export const MenuContainer = styled.nav`
  align-items: center;
  display: flex;
  margin-left: auto;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`
export const Icon = styled.div`
  margin-left: ${g(3)};
`
export const UserIcon = styled.div`
  margin-right: ${g(1)};

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-right: ${g(2)};
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-weight: 600;
`

export const MenuItem = styled.li`
  position: relative;
  margin-right: ${g(2)};
  transition: all 0.3s ease-out;
  font-family: ${fonts.circular};

  ${({ active }) =>
    active &&
    css`
      color: ${colors['primary-1']};
    `}

  &:last-child {
    margin-right: ${g(2)};
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    margin-right: ${g(3)};

    &:last-child {
      margin-left: ${g(4)};
    }
  }

  ${({ active, noHover }) =>
    !active &&
    !noHover &&
    css`
      &:before {
        color: ${colors['primary-1']};
        position: absolute;
        height: 2px;
        bottom: -4px;
        left: -2px;
        right: -2px;
        border-radius: 1px;
        background: ${colors['primary-1']};
        transform: scaleX(0);
        transform-origin: center;
        transition: all 0.3s ease-in-out;
        content: '';
      }

      &:hover {
        &:before {
          transform: scaleX(1);
        }
      }
    `}
`

export const SubMenuContainer = styled.div`
  text-align: center;
`
export const SubMenu = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  border-radius: 4px;
  max-width: ${breakpoints.tablet};
  margin: ${g(3)} auto ${g(-3)};
  padding: 0 ${g(5)};
  font-weight: 600;
  z-index: 1;
`

export const SubMenuItem = styled.div`
  color: ${({ active }) => (active ? colors['primary-1'] : colors['neutral-1-60'])};
  font-family: ${fonts.circular};
  line-height: ${g(8)};
  margin-right: ${g(3)};
  position: relative;
  transition: color 0.3s ease-in-out;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${colors['primary-1']};
  }

  &::before {
    position: absolute;
    width: 10px;
    height: 10px;
    bottom: -7px;
    left: 50%;
    margin-left: -4px;
    border-radius: 100%;
    border: 2px solid ${colors.white};
    background-color: ${colors['primary-1']};
    transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0)')};
    transform-origin: center;
    transition: all 0.3s ease-in-out;
    content: '';
  }
`

export const StickyMenu = styled.div`
  ${helpers.boxShadow(0)};
  background-color: ${colors.white};
  left: 0;
  position: fixed;
  top: 0;
  transform: translateY(-100%);
  transition: box-shadow 400ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  right: 0;
  will-change: box-shadow, transform;
  z-index: 20;

  ${({ visible }) =>
    visible &&
    css`
      ${helpers.boxShadow(2)};
      transform: translateY(0);
    `}
`
