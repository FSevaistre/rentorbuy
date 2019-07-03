import styled from 'styled-components'
import { colors, g, layout, breakpoints } from '../../../../core'

export const Header = styled.header`
  padding: ${g(3)};
  position: relative;
  text-align: center;
  padding: ${g(4)} ${g(2)} ${g(12)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding-bottom: ${g(34)};

    &:before {
      background-image: url('https://res.cloudinary.com/pretto-fr/image/upload/w_1680,q_auto/v1555575700/website/page/home/hero-tablet${({
        extension
      }) => extension}');
      background-position-x: center;
      background-position-y: calc(100% - ${g(1)});
      background-repeat: no-repeat;
      background-size: ${g(200)} auto;
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    padding-bottom: ${g(17)};
    padding-top: ${g(6)};

    &:before {
      background-image: url('https://res.cloudinary.com/pretto-fr/image/upload/w_2480,q_auto/v1554906304/website/page/home/hero${({
        extension
      }) => extension}');
      background-position-y: calc(100% + ${g(1)});
    }
  }
`

export const HeaderContent = styled.div`
  @media only screen and (min-width: ${breakpoints.tablet}) {
    max-width: ${layout.desktop.default};
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${g(5)};
  }
`

export const HeaderCta = styled.div`
  color: ${colors.white};
  margin-bottom: ${g(5)};
`

export const HeroCta = styled.div`
  max-width: 350px;
  margin: auto;
  margin-top: ${g(4)};

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 30%;
    margin: auto;
    margin-top: ${g(5)};

    &:hover {
      transform: translate3d(0, 0, 0) scale(1.0357142857);
    }
  }
`

export const HeaderTitle = styled.div`
  margin-bottom: ${g(6)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }
`

export const HeaderTrustpilot = styled.div`
  display: flex;
  justify-content: center;
`
