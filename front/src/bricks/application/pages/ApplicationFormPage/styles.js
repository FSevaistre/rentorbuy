import styled, { css } from 'styled-components'

import { g, layout, tablet } from '../../../core'

export const Button = styled.div`
  padding-top: ${g(4)};
  text-align: center;

  @media only screen and (min-width: ${tablet.min}) {
    padding-right: 40%;
    padding-top: ${g(6)};
  }
`

export const Divider = styled.div`
  margin-top: ${g(6)};

  @media only screen and (min-width: ${tablet.min}) {
    width: 60%;
  }
`

export const Form = styled.div`
  padding: ${g(2)} 0 ${g(5)};

  @media only screen and (min-width: ${tablet.min}) {
    padding: ${g(4)} 0 ${g(7)};
  }
`

export const Section = styled.div`
  & + & {
    margin-top: ${g(4)};

    @media only screen and (min-width: ${tablet.min}) {
      margin-top: ${g(6)};
    }
  }
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
