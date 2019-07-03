import styled from 'styled-components'

import { g, tablet } from '../../../../core'

export const Source = styled.figcaption`
  font-style: italic;
  margin-top: ${g(1)};
  text-align: center;

  @media screen and (min-width: ${tablet.min}) {
    padding: 0 ${g(3)};
  }

  a {
    text-decoration: underline;

    &:focus,
    &:hover {
      outline: 0px transparent;
      text-decoration: none;
    }
  }
`

export const Chart = styled.div`
  padding-top: ${(3 / 4) * 100}%;
  position: relative;
`

export const Content = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`
