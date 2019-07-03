import styled from 'styled-components'

import { colors, g, breakpoints } from '../../../../core'

export const Body = styled.div`
  padding: ${g(3)} ${g(2)};

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    padding: ${g(5)} ${g(1)};
  }
`

export const Footer = styled.footer`
  background-color: ${colors.neutral1.default};
  color: ${colors.white};
`

export const Header = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: ${g(3)} ${g(2)};
  text-align: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: ${g(5)};
  }
`

export const Legal = styled.div`
  & > * + * {
    margin-top: ${g(2)};
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-basis: ${(100 / 4) * 1}%;
    padding: 0 ${g(2)};
  }
`

export const Menus = styled.nav`
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-basis: ${(100 / 4) * 3}%;
    flex-wrap: wrap;
  }
`

export const MenuItem = styled.div``

export const Menu = styled.div`
  margin-top: ${g(3)};

  a:focus {
    outline: 0px transparent;
    text-decoration: underline;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-basis: ${100 / 3}%;
    margin-top: 0;
    padding: 0 ${g(2)};

    &:nth-child(n + 4) {
      margin-top: ${g(2)};
    }
  }

  ${MenuItem} + ${MenuItem} {
    margin-top: ${g(3)};
  }
`

export const MenuTitle = styled.div`
  margin-bottom: ${g(2)};
`

export const Socials = styled.div`
  display: flex;
`

export const Social = styled.div`
  & + & {
    margin-left: ${g(1)};
  }
`

export const Title = styled.div`
  margin-bottom: ${g(3)};
`

export const Trustpilot = styled.div`
  display: flex;
  justify-content: center;
`
