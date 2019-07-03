import styled from 'styled-components'

import { g, breakpoints } from '../../../../core'

export const Rates = styled.div`
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`
export const Advisor = styled.div`
  margin-bottom: ${g(2)};
  padding: ${g(2)};
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex: 1 1 33.3%;
    margin-right: ${g(8)};
    padding-left: ${g(3)};
  }
  @media screen and (min-width: ${breakpoints.laptop}) {
    padding-left: 0;
  }
`
export const AdvisorTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${g(2)};
`
export const AdvisorPicture = styled.div`
  display: block;
  margin-right: ${g(2)};
  border-radius: 50%;
  width: ${g(10)};
  height: ${g(10)};
  overflow: hidden;
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: ${g(13)};
    height: auto;
  }
`
export const AdvisorDescription = styled.div`
  flex-grow: 1;
`
export const Banks = styled.div`
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex: 1 1 66.6%;
  }
`
