import styled from 'styled-components'
import { g, colors, breakpoints } from '../../../../core'

export const Section = styled.section`
  background: ${colors.neutral1.light};
  padding-top: ${g(3)};
  padding-bottom: ${g(2)};
  @media screen and (min-width: ${breakpoints.tablet}) {
    padding-top: ${g(5)};
    padding-bottom: ${g(5)};
  }
`

export const Title = styled.div`
  margin-bottom: ${g(3)};
  text-align: center;
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-top: 0;
    margin-bottom: ${g(5)};
  }
`

export const Content = styled.div`
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: center;
  }
`
export const CardContainer = styled.div`
  width: 100%;
  @media screen and (min-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.mobileS};
  }

  &:first-child {
    margin-bottom: ${g(2)};
    @media screen and (min-width: ${breakpoints.tablet}) {
      margin-right: ${g(3)};
      margin-bottom: 0;
    }
  }
`
export const Card = styled.div`
  @media screen and (min-width: ${breakpoints.tablet}) {
    height: 100%;
    position: relative;
    padding-bottom: ${g(3)};
  }
`
export const Button = styled.div`
  margin-top: auto;
  @media screen and (min-width: ${breakpoints.tablet}) {
    position: absolute;
    right: ${g(3)};
    bottom: ${g(3)};
    left: ${g(3)};
  }
`

export const CardTitle = styled.div`
  margin-bottom: ${g(2)};
`
export const CardContent = styled.p`
  margin-bottom: ${g(5)};
`
