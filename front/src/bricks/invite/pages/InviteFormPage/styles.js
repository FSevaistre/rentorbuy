import styled from 'styled-components'

import { g, layout, tablet } from '../../../core'

export const Button = styled.div`
  padding-top: ${g(4)};
  text-align: center;

  @media only screen and (min-width: ${tablet.min}) {
    padding-right: 40%;
    padding-top: ${g(6)};
  }
`

export const Title = styled.div`
  margin-bottom: ${g(4)};
`

export const Wrapper = styled.div`
  margin: 0 ${g(2)};
  padding: ${g(2)} 0 ${g(5)};

  @media only screen and (min-width: ${tablet.min}) {
    margin: 0 ${g(3)};
    padding: ${g(4)} 0 ${g(7)};
  }

  @media only screen and (min-width: ${layout.desktop.default}) {
    margin: 0 auto;
    max-width: ${layout.desktop.default};
    padding: ${g(4)} ${g(3)} ${g(7)};
  }
`
