import styled from 'styled-components'

import { colors, g, layout, tablet } from '../../../../core'

export const CookieBar = styled.div`
  background-color: ${colors.accent1.light};
  color: ${colors.accent1.default};
  padding: ${g(2)} 0;
`

export const CookieBarContent = styled.div`
  padding: 0 ${g(2)};
  text-align: center;

  @media only screen and (min-width: ${tablet.min}) {
    align-items: center;
    display: flex;
    max-width: ${layout.desktop.default};
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${g(5)};
    text-align: left;
  }
`

export const Emoji = styled.span`
  display: inline;
  margin-right: ${g(1)};
`

export const Link = styled.div`
  margin-left: ${g(2)};

  a,
  button {
    background: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    text-decoration: underline;

    &:focus,
    &:hover {
      outline: 0px transparent;
      text-decoration: none;
    }
  }
`

export const Links = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  margin-top: ${g(1)};

  @media only screen and (min-width: ${tablet.min}) {
    margin-top: 0;
  }
`
