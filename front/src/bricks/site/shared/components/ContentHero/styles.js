import styled, { css } from 'styled-components'

import { colors, g, breakpoints } from '../../../../core'

export const Content = styled.div`
  padding: 0 ${g(2)};
  position: relative;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin: 0 ${g(10)};
    padding: 0;
  }
`

export const Hero = styled.div`
  margin-bottom: ${g(3)};
  position: relative;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${g(8)};

    ${({ hasSubMenu }) =>
      hasSubMenu &&
      css`
        padding-top: ${g(3)};
      `}
  }

  &:before {
    background-color: ${colors.neutral1.light};
    bottom: ${({ noShare }) => (noShare ? '0' : g(5))};
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;

    @media screen and (min-width: ${breakpoints.tablet}) {
      bottom: 0;
    }

    ${({ hasImage }) =>
      hasImage &&
      css`
        bottom: ${g(9)};

        @media screen and (min-width: ${breakpoints.tablet}) {
          bottom: ${g(8)};
        }
      `}
  }
`

export const Inner = styled.div`
  @media screen and (min-width: ${breakpoints.tablet}) {
  }
`

export const Socials = styled.div`
  justify-content: flex-end;
  display: flex;

  @media screen and (min-width: ${breakpoints.tablet}) {
    bottom: ${g(-3)};
    flex-direction: column;
    left: 100%;
    position: absolute;

    ${({ hasImage }) =>
      hasImage &&
      css`
        bottom: 0;
      `}
  }
`

export const Social = styled.div`
  margin-left: ${g(1)};
  margin-top: ${g(1)};

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-right: ${g(3 / 2)};
  }
`

export const Title = styled.div`
  padding: ${g(3)} 0;
  text-align: ${({ align }) => align};

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: ${g(7)} 0;
  }

  ${({ hasImage }) =>
    hasImage &&
    css`
      padding: ${g(3)} 0 ${g(4)};

      @media screen and (min-width: ${breakpoints.tablet}) {
        padding: ${g(7)} 0 ${g(5)};
      }
    `}
`
