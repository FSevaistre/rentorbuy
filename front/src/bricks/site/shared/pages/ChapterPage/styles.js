import styled from 'styled-components'

import { g, tablet } from '../../../../core'

export const Hero = styled.div`
  margin-bottom: ${g(4)};

  @media only screen and (min-width: ${tablet.min}) {
    margin-bottom: ${g(8)};
  }
`

export const Page = styled.div`
  margin-bottom: ${g(10)};
`

export const Topic = styled.div`
  & + & {
    margin-top: ${g(4)};

    @media only screen and (min-width: ${tablet.min}) {
      margin-top: ${g(8)};
    }
  }
`

export const Topics = styled.div`
  margin-bottom: ${g(5)};

  @media only screen and (min-width: ${tablet.min}) {
    margin-bottom: ${g(8)};
  }
`

export const Title = styled.div`
  margin-bottom: ${g(4)};
  text-align: center;
`

export const Links = styled.div`
  @media only screen and (min-width: ${tablet.min}) {
    display: flex;
  }
`

export const Link = styled.div`
  margin-bottom: ${g(2)};

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: ${tablet.min}) {
    flex: 1 1 50%;
    margin-right: ${g(3)};
    margin-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }
`
