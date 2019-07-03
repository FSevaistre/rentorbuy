import styled from 'styled-components'

import { g, tablet } from '../../../core'

export const Banner = styled.div`
  padding: ${g(2)};
  text-align: center;

  @media screen and (min-width: ${tablet.min}) {
    align-items: center;
    display: flex;
    height: ${g(7)};
    justify-content: center;
    padding: 0 ${g(2)};
  }

  a {
    text-decoration: underline;
  }
`

export const Emoji = styled.span`
  margin-right: ${g(1)};
`
