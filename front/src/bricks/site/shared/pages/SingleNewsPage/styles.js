import styled from 'styled-components'

import { g, colors, layout, tablet } from '../../../../core'

export const Image = styled.div`
  margin: 0 ${g(2)} ${g(5)};

  @media only screen and (min-width: ${tablet.min}) {
    width: ${(100 / 3) * 2}%;
    margin: 0 auto ${g(7)};
  }
`

export const Content = styled.div`
  margin-bottom: ${g(5)};

  @media only screen and (min-width: ${tablet.min}) {
    margin-bottom: ${g(8)};
  }
`

export const Page = styled.article`
  @media only screen and (min-width: ${tablet.min}) {
    max-width: ${layout.desktop.default};
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${g(5)};
  }
`

export const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${g(2)};
  color: ${colors.primary1.default};

  @media only screen and (min-width: ${tablet.min}) {
    margin-bottom: ${g(3)};
  }
`

export const Icon = styled.div`
  margin-right: ${g(2)};
`

export const Social = styled.div`
  margin: ${g(6)} ${g(2)} ${g(4)};

  @media only screen and (min-width: ${tablet.min}) {
    width: ${(100 / 3) * 2}%;
    margin: ${g(8)} auto ${g(5)};
  }
`

export const SocialButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: ${g(2)} 0;
`

export const SocialButton = styled.div`
  margin-right: ${g(1)};

  &:last-child {
    margin-right: 0;
  }
`
