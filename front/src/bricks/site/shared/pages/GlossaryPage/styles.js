import styled, { css } from 'styled-components'

import { g, colors, breakpoints } from '../../../../core'

export const Nav = styled.nav`
  padding: 0 ${g(2)} ${g(3)};
  white-space: nowrap;
  overflow: auto;

  @media only screen and (min-width: ${breakpoints.laptop}) {
    display: flex;
    border: 1px solid ${colors['neutral-1-20']};
    border-radius: ${g(1 / 2)};
    height: ${g(6)};
    line-height: ${g(6)};
    margin-bottom: ${g(3)};
    padding: 0;
    white-space: initial;
    overflow: hidden;
  }
`

export const NavItem = styled.div`
  cursor: pointer;
  text-align: center;
  transition: all 150ms ease-in-out;

  border-radius: ${g(1 / 2)};
  border: 1px solid ${colors['neutral-1-20']};
  height: ${g(6)};
  width: ${g(6)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${g(1)};

  @media only screen and (min-width: ${breakpoints.laptop}) {
    display: block;
    height: initial;
    widows: initial;
    border: 0;
    border-radius: 0;
    flex-grow: 1;
    padding: 0 ${g(1)};
    position: relative;
    margin-right: 0;
  }

  &::after,
  &::before {
    position: absolute;
    width: 1px;
    right: -1px;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${colors.white};
    content: '';
  }

  &::after {
    z-index: 2;
    background-color: ${colors['neutral-1-20']};
  }

  &:not(:first-child) {
    text-transform: uppercase;
  }

  ${({ active }) =>
    active
      ? css`
          color: ${colors.white};
          background-color: ${colors['primary-1']};
        `
      : css`
          &:hover {
            background: ${colors['neutral-1-l']};
          }
        `}

  &:last-child {
    margin-right: 0;

    &::after,
    &::after {
      display: none;
    }
  }
`

export const Content = styled.div`
  margin-bottom: ${g(8)};

  @media only screen and (min-width: ${breakpoints.laptop}) {
    margin-bottom: ${g(12)};
  }
`

export const Page = styled.div``

export const TermsList = styled.div`
  padding: ${g(2)};

  @media only screen and (min-width: ${breakpoints.laptop}) {
    padding: 0;
  }
`

export const TermsSection = styled.div`
  margin-bottom: ${g(3)};
  @media only screen and (min-width: ${breakpoints.laptop}) {
    margin-bottom: ${g(5)};
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const TermSectionHeading = styled.div`
  margin-bottom: ${g(3)};
  text-transform: uppercase;
`

export const TermSectionDivider = styled.div`
  margin-top: ${g(1)};
`

export const Terms = styled.ul`
  @media only screen and (min-width: ${breakpoints.tablet}) {
    columns: 2;
  }
`

export const Term = styled.li`
  color: ${colors['primary-1']};
`
