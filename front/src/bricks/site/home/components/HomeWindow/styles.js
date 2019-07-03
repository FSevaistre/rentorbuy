import styled, { css } from 'styled-components'
import { sliders, simulations, effectChange } from './animations'
import { colors, g, breakpoints } from '../../../../core'

export const Window = styled.div`
  border-radius: ${g(1)};

  overflow: hidden;
`
export const WindowHeader = styled.div`
  position: relative;
  height: ${g(5)};
  background-color: ${colors.neutral1.light};
`
export const WindowBar = styled.div`
  position: absolute;
  top: ${g(2)};
  left: ${g(2)};
`
export const Bar = styled.span`
  display: inline-block;
  vertical-align: top;
  width: ${g(1)};
  height: ${g(1)};
  margin-right: ${g(1)};
  border-radius: ${g(1)};

  background-color: ${colors.neutral1.fade(20)};
`
export const WindowContent = styled.div`
  display: flex;
  padding: ${g(2)};

  @media screen and (min-width: ${breakpoints.mobileL}) {
    padding: ${g(3)};
  }
`

export const Slider = styled.div`
  & + & {
    margin-top: ${g(4)};
  }

  ${({ index }) => css`
    ${SliderFill}, ${SliderBarContainerHandle} {
      animation: ${sliders[`sliderAnimation${index + 1}`]} 10s linear infinite;
    }
  `}
`
export const SliderTitle = styled.div`
  display: flex;
  margin-bottom: ${g(1)};
  font-weight: 600;
`

export const SliderHandle = styled.div`
  position: absolute;
  display: block;

  width: ${g(3)};
  height: ${g(3)};
  right: ${g(-1)};
  top: ${g(-1)};

  border-radius: ${g(3)};
  border: 2px solid ${colors.neutral1.default};
  background-color: ${colors.white};
`
export const SliderBarContainer = styled.div`
  display: block;
  position: relative;
  z-index: 0;
  border-radius: ${g(1)};
  background-color: ${colors.neutral1.fade(20)};
  height: ${g(1)};
  overflow: hidden;
`
export const SliderBarContainerHandle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: transparent;
  overflow: visible;
`

export const SliderFill = styled.div`
  display: block;
  position: relative;
  transform: translateX(-50%);

  width: 100%;
  height: ${g(1)};
  border-radius: ${g(1)};

  background-color: ${colors.neutral1.default};
`
export const SliderBar = styled.div`
  position: relative;

  ${({ variant }) => css`
    ${SliderFill} {
      background-color: ${colors[variant]};
    }
    ${SliderHandle} {
      border-color: ${colors[variant]};
    }
  `}
`

export const SliderTitleName = styled.div`
  flex: 0 0 50%;
`
export const SliderTitleValue = styled.div`
  flex: 0 0 50%;
  text-align: right;
`
export const ViewSliderContainer = styled.div`
  flex: 0 0 50%;

  ${({ type }) =>
    type === 'bank' &&
    css`
      transition: all 0.2s linear;
      animation: ${effectChange} 10s linear infinite;
      padding-left: ${g(3)};
    `}
`

export const BankLineRate = styled.span`
  position: absolute;
  right: 0;

  ${({ index }) => css`
    animation: ${simulations[`simulationAnimation${index + 1}`]} 10s linear infinite;
  `}
`
export const BankLine = styled.div`
  display: flex;
  position: relative;
  margin-bottom: ${g(2)};
  border: 2px solid ${colors.accent1.default};
  border-radius: ${g(1)};
  box-shadow: 0 4px 20px 0 ${colors.neutral1.fade(15)};
  padding: ${g(2)};
  line-height: 18px;
  font-size: 14px;

  & + & {
    margin-top: ${g(1)};
    margin-bottom: 0;
    border: 0;
    box-shadow: none;
    background-color: ${colors.neutral1.light};

    ${BankLineRate} {
      font-size: 18px;
    }
  }
`
export const BanksList = styled.div``
export const BankLineTitles = styled.div`
  position: relative;
  flex: 0 0 50%;
  height: 18px;
`
export const BankLineTitle = styled.span`
  position: absolute;
  left: 0;

  ${({ index }) => css`
    animation: ${simulations[`simulationAnimation${index + 1}`]} 10s linear infinite;
  `}
`
export const BankLineRates = styled.div`
  position: relative;
  flex: 0 0 50%;
  height: 18px;

  text-align: right;
  font-size: ${g(3)};
  font-weight: 600;
`
