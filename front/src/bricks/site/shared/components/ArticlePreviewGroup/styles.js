import styled from 'styled-components'

import { g, tablet } from '../../../../core'

export const Articles = styled.div`
  @media only screen and (min-width: ${tablet.min}) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 ${g(-3 / 2)};
  }
`

export const Article = styled.div`
  & + & {
    margin-top: ${g(4)};
  }

  @media only screen and (min-width: ${tablet.min}) {
    flex-basis: ${100 / 3}%;
    padding: 0 ${g(3 / 2)};

    & + & {
      margin-top: 0;
    }

    &:nth-child(n + 4) {
      margin-top: ${g(5)};
    }
  }
`
