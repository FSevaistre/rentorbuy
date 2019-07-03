import styled from 'styled-components'

import { g, colors, breakpoints } from '../../../../core'

export const Steps = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`
export const Step = styled.li`
  flex-basis: 100%;
  margin: 0 auto ${g(3)};
  max-width: ${breakpoints.mobileL};

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-basis: 33.33%;
    margin-bottom: 0;

    &:nth-child(1) {
      padding-right: ${g(2)};
    }

    &:nth-child(2) {
      padding-right: ${g(1)};
      padding-left: ${g(1)};
    }

    &:nth-child(3) {
      padding-left: ${g(2)};
    }
  }
`
export const Number = styled.div`
  margin: 0 auto ${g(2)};
  border-radius: 50%;
  background-color: ${colors.accent1.default};
  width: ${g(6)};
  height: ${g(6)};
  text-align: center;
  line-height: ${g(6)};
  color: ${colors.white};
  font-size: ${g(3)};
`
