import styled from 'styled-components'
import { colors, g, breakpoints } from '../../../../core'

export const Trustpilot = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  margin-bottom: ${g(6)};
`

export const TrustpilotRate = styled.div`
  margin: 0 ${g(2)};
`

export const TrustpilotScore = styled.div`
  align-items: center;
  display: flex;
`

export const TrustpilotStars = styled.div`
  align-items: center;
  display: flex;
  height: ${g(5)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    height: ${g(6)};
  }
`

export const TrustpilotModule = styled.div`
  background-color: ${colors.neutral1.light};
  padding-top: ${g(3)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: ${g(3)} ${g(14)} 0;
  }
`
