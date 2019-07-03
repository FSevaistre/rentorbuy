import styled, { css } from 'styled-components'

import { g, colors } from '../../../../core'

export const Container = styled.nav`
  position: relative;
  height: 100vh;
`

export const Menu = styled.ul`
  margin-bottom: ${g(1)};
`

export const MenuItem = styled.li`
  font-weight: 600;
  position: relative;
  padding: ${g(2)};
  overflow: hidden;

  ${({ active }) =>
    active &&
    css`
    &:after {
      position: absolute;
      top: ${g(3)};
      left: -4px;
      width: ${g(1)};
      height: ${g(1)};
      border-radius: 100%;
      background ${colors['primary-1']};
      content: '';
    }
  `}
`

export const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${g(2)};
  z-index: 1;
`

export const GuideMenu = styled.ul`
  margin-top: ${g(2)};
`
export const GuideMenuItem = styled.li`
  position: relative;
  padding-left: ${({ active }) => (active ? g(6) : g(5))};
  text-transform: uppercase;
  font-weight: 500;
  margin-top: ${g(1)};
  letter-spacing: 0.12px;
  line-height: ${g(2.5)};

  &:after {
    position: absolute;
    top: ${g(1.25)};
    left: ${g(1)};
    width: ${({ active }) => (active ? g(3) : g(2))};
    height: 2px;
    background: ${({ variant }) => colors[variant]};
    content: '';
  }
`
export const Button = styled.div`
  display: inline-block;
  position: sticky;
  left: 0;
  top: 100%;
  padding: ${g(2)};
`
