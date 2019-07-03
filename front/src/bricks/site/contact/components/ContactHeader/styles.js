import styled from 'styled-components'
import { g, breakpoints } from '../../../../core'

export const Content = styled.div`
  display: flex;
  justify-content: center;
`
export const Aside = styled.aside`
  display: none;
  @media screen and (min-width: ${breakpoints.tablet}) {
    border-radius: ${g(1)};
    overflow: hidden;
    margin-right: ${g(3)};
    display: block;
    width: ${breakpoints.mobileS};
    height: 100%;
  }
`
export const Title = styled.span`
  display: flex;
  margin: ${g(2)} 0;
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin: ${g(3)} 0;
  }

  > * {
    margin-right: ${g(3)};
  }
`
export const Intercom = styled.p`
  text-decoration: underline;
  cursor: pointer;
`
export const Information = styled.div`
  padding-top: ${g(1)};
  margin-bottom: ${g(2)};
  max-width: ${breakpoints.mobileS};
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${g(4)};
  }
`
