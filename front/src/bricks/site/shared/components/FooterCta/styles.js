import styled from 'styled-components'

import { colors, g, breakpoints } from '../../../../core'

export const Wrapper = styled.div`
  background: linear-gradient(to right, rgba(53, 174, 119, 0) 50%, #2eafbf 100%) ${colors.primary1.default};
`

export const Content = styled.div`
  padding: ${g(2)};
  text-align: center;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    padding: ${g(7)} ${g(3)};
    text-align: left;
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    padding-left: 0;
    padding-right: 0;
  }
`

export const Cta = styled.div`
  color: ${colors.primary1.default};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }
`

export const Button = styled.div`
  transition: transform 400ms ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.0357142857);
  }
`

export const ButtonText = styled.span`
  color: ${colors.primary1.default};
`

export const Headline = styled.div`
  @media only screen and (min-width: ${breakpoints.tablet}) {
    max-width: 50%;
  }
`
