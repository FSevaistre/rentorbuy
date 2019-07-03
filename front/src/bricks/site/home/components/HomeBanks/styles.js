import styled, { css } from 'styled-components'
import { colors, g, breakpoints } from '../../../../core'
import { logos, powerBounce } from './animations'

export const Banks = styled.div`
  background-color: ${colors.neutral1.light};
  padding: ${g(11)} ${g(2)} 0;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: ${g(17)} 0 0;
  }
`

export const BanksDescription = styled.div`
  margin-bottom: ${g(3)};
  text-align: center;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
    width: ${(100 / 3) * 2}%;
  }
`

export const BanksTitle = styled.div`
  margin-bottom: ${g(3)};
  text-align: center;
`

export const BankLogo = styled.div`
  position: relative;
  width: 100%;
  max-width: ${breakpoints.mobileL};
  margin: auto;
  margin-top: ${g(2)};

  @media screen and (min-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.laptop};
    height: 340px;
    background-image: url('https://res.cloudinary.com/pretto-fr/image/upload/q_auto/website/page/home/bank-logo-bg.png');
    background-position: center;
    background-repeat: no-repeat;
    margin-top: auto;
  }
`
export const PrettoLogoContainer = styled.div`
  position: absolute;
  width: ${g(10)};
  height: ${g(10)};
  left: calc(50% - ${g(5)});
  top: 35%;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: ${g(16)};
    height: ${g(16)};
    left: calc(50% - ${g(8)});
    top: calc(50% - ${g(8)});
  }
`
export const PrettoLogoPower = styled.div`
  position: absolute;

  top: -17px;
  left: calc(50% - 17px);
  width: 34px;
  height: 34px;
  padding: 5px;
  border-radius: 34px;
  background-color: rgba(255, 255, 255, 0.2);

  animation: ${powerBounce} 2s linear infinite;

  @media screen and (min-width: ${breakpoints.tablet}) {
    top: -25px;
    left: calc(50% - ${g(3)});
    width: ${g(6)};
    height: ${g(6)};
    padding: ${g(1)};
  }
`
export const PrettoLogoThunder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${g(6)};
  background-color: #fff;

  background-image: url('https://res.cloudinary.com/pretto-fr/image/upload/q_auto/website/page/home/icon-thunder.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 10px;
  box-shadow: 0 0 25px ${colors.neutral1.fade(10)};

  @media screen and (min-width: ${breakpoints.tablet}) {
    background-size: ${g(2)};
  }
`
export const PrettoLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${g(10)};
  height: ${g(10)};
  background-image: linear-gradient(200deg, ${colors.primary1.default} 37%, #45e59c 120%);
  box-shadow: 0 0 25px 0 ${colors.neutral1.fade(20)};
  border-radius: ${g(1)};

  color: ${colors.white};
  font-size: ${g(4)};
  line-height: ${g(10)};
  text-align: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: ${g(16)};
    height: ${g(16)};
    border-radius: ${g(1)};
    font-size: ${g(6)};
    text-align: center;
    line-height: ${g(16)};
  }
`
export const BankLogoContainer = styled.div`
  height: 370px;
  position: relative;
  bottom: -20px;
  z-index: 2;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin: 0 ${g(3)};
    position: absolute;
    left: 0;
    right: 0;
    bottom: -44px;
    height: ${g(11 * 3)};
  }
`

export const BankLogoGrid = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: ${g(11)};
    height: ${g(11)};
  }
`

export const BankLogoComponent = styled.div`
  display: block;
  position: absolute;
  overflow: hidden;
  width: 60px;
  height: 60px;

  border-radius: 100px;
  box-shadow: 0 2px 20px 0 ${colors.neutral1.fade(20)};

  img {
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: ${g(10)};
    height: ${g(10)};
    top: 4px;
    left: 4px;
  }
`
export const BankLogoItem = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: ${g(11)};
    height: ${g(11)};
  }

  ${({ number }) => {
    switch (number) {
      case 1:
        return css`
          top: 0;
          left: 54px;
          @media screen and (min-width: ${breakpoints.tablet}) {
            top: 0;
            left: ${g(11)};
            animation: ${logos.logoAnimation1} 2.8s linear infinite;
          }
        `

      case 2:
        return css`
          animation: ${logos.logoAnimation2} 3.2s linear infinite;
          top: 0;
          right: 54px;
          @media screen and (min-width: ${breakpoints.tablet}) {
            top: 0;
            right: ${g(11)};
          }
        `

      case 3:
        return css`
          animation: ${logos.logoAnimation3} 3.6s linear infinite;
          top: 54px;
          left: 0;
          @media screen and (min-width: ${breakpoints.tablet}) {
            top: ${g(11)};
            left: 0;
          }
        `

      case 4:
        return css`
          animation: ${logos.logoAnimation2} 4s linear infinite;
          top: 54px;
          right: 0;
          @media screen and (min-width: ${breakpoints.tablet}) {
            top: ${g(11)};
            right: initial;
            left: ${g(11 * 2)};
          }
        `

      case 5:
        return css`
          animation: ${logos.logoAnimation3} 3.2s linear infinite;
          top: 182px;
          left: 0;
          @media screen and (min-width: ${breakpoints.tablet}) {
            top: ${g(11)};
            right: ${g(11 * 2)};
            left: initial;
          }
        `

      case 6:
        return css`
          animation: ${logos.logoAnimation6} 2.8s linear infinite;
          top: 182px;
          right: 0;
          @media screen and (min-width: ${breakpoints.tablet}) {
            top: ${g(11)};
            right: 0;
          }
        `

      case 7:
        return css`
          animation: ${logos.logoAnimation1} 2.8s linear infinite;
          top: 240px;
          left: 70px;
          @media screen and (min-width: ${breakpoints.tablet}) {
            top: ${g(11 * 2)};
            left: ${g(11)};
          }
        `

      case 8:
        return css`
          animation: ${logos.logoAnimation5} 3.6s linear infinite;
          top: 240px;
          right: 70px;
          @media screen and (min-width: ${breakpoints.tablet}) {
            top: ${g(11 * 2)};
            right: initial;
            left: ${g(11 * 3)};
          }
        `

      case 9:
        return css`
          animation: ${logos.logoAnimation3} 3.4s linear infinite;
          top: 295px;
          left: 10px;
          @media screen and (min-width: ${breakpoints.tablet}) {
            top: ${g(11 * 2)};
            right: ${g(11 * 3)};
            left: initial;
          }
        `

      case 10:
        return css`
          animation: ${logos.logoAnimation5} 3.2s linear infinite;
          top: 295px;
          right: 10px;
          @media screen and (min-width: ${breakpoints.tablet}) {
            top: ${g(11 * 2)};
            right: ${g(11)};
          }
        `
    }
  }}}
`

export const BankLogoContent = styled.div`
  display: block;
  position: absolute;
  overflow: hidden;
  width: 60px;
  height: 60px;

  border-radius: 100px;
  box-shadow: 0 2px 20px 0 ${colors.neutral1.fade(20)};

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: ${g(10)};
    height: ${g(10)};
    top: 4px;
    left: 4px;
  }

  ${({ size }) => {
    switch (size) {
      case 'medium':
        return css`
          @media screen and (min-width: ${breakpoints.tablet}) {
            width: ${g(11)};
            height: ${g(11)};
            top: 0;
            left: 0;
          }
        `
      case 'large':
        return css`
          @media screen and (min-width: ${breakpoints.tablet}) {
            width: 104px;
            height: 104px;
            top: -8px;
            left: -8px;
          }
        `
    }
  }}
`
