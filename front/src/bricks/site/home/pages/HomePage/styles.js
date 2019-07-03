import styled, { css } from 'styled-components'
import { waves } from './animations'
import { colors, g, breakpoints } from '../../../../core'

export const Page = styled.div`
  overflow: hidden;
`

export const SectionTitle = styled.div`
  margin-bottom: ${g(4)};
  text-align: center;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${g(6)};
  }
`

export const Waves = styled.div`
  left: 0;
  margin-top: calc(-50% - ${g(7)});
  padding-top: 100%;
  position: absolute;
  right: 0;
  top: 0;
`

export const Wave = styled.div`
  display: inline-block;
  position: absolute;
  border: 1px solid #fff;
  border-radius: 50%;

  ${({ index }) => css`
    top: ${index * 20}px;
    right: ${index * 20}px;
    bottom: ${index * 20}px;
    left: ${index * 20}px;
    animation: ${waves[`wave${index}`]} 3s linear infinite;
  `}

  ${({ index }) => {
    let opacity = 0
    switch (index) {
      case 3: {
        opacity = 0.05
        break
      }
      case 4: {
        opacity = 0.1
        break
      }
      case 5: {
        opacity = 0.16
        break
      }
      case 6: {
        opacity = 0.22
        break
      }
      case 7: {
        opacity = 0.3
        break
      }
      case 8: {
        opacity = 0.35
        break
      }

      default:
        break
    }
    return css`
      opacity: ${opacity};
    `
  }}
`
export const ViewSlider = styled.div`
  display: none;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: block;
    position: relative;
    z-index: 9;
    margin: 0 auto;
    width: 100%;
    max-width: 620px;
  }
`

export const Arguments = styled.div`
  margin-top: ${g(-8)};
`
export const ArgumentsDecoration = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.laptop}) {
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    top: ${g(7)};
    z-index: 1;
    display: block;
    left: calc(50% - 480px);
    right: calc(50% - 480px);
  }
`

export const ArgumentsContent = styled.div`
  position: relative;

  &:before {
    background: linear-gradient(to bottom, ${colors.primary1.default} 0%, ${colors.primary1.default} 50%, #2eafbf 100%),
      ${colors.primary1.default};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;

    @media only screen and (min-width: ${breakpoints.tablet}) {
      top: ${g(7)};
    }
  }
`

export const ArgumentsSlider = styled.div`
  display: none;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const Section = styled.section`
  & + & {
    margin-top: ${g(7)};

    @media only screen and (min-width: ${breakpoints.tablet}) {
      margin-top: ${g(13)};
    }
  }
`
