import { keyframes } from 'styled-components'

const sliderAnimation1 = keyframes`
  0% {
    transform: translateX(-50%);
  }

  13%,
  33% {
    transform: translateX(-50%);
  }

  46%,
  66% {
    transform: translateX(-20%);
  }

  79%,
  100% {
    transform: translateX(-50%);
  }
`
const sliderAnimation2 = keyframes`
  0% {
    transform: translateX(-70%);
  }

  13%,
  33% {
    transform: translateX(-20%);
  }

  46%,
  66% {
    transform: translateX(-20%);
  }

  79%,
  100% {
    transform: translateX(-70%);
  }
`
const sliderAnimation3 = keyframes`
  0% {
    transform: translateX(0);
  }

  13%,
  33% {
    transform: translateX(-50%);
  }

  46%,
  66% {
    transform: translateX(-20%);
  }

  79%,
  100% {
    transform: translateX(0);
  }
`

export const sliders = {
  sliderAnimation1,
  sliderAnimation2,
  sliderAnimation3
}

const simulationAnimation1 = keyframes`
  0%,
  16%,
  85%,
  100% {
    opacity: 1;
  }

  17%,
  84% {
    opacity: 0;
  }
`
const simulationAnimation2 = keyframes`
  0%,
  17%,
  51%,
  100% {
    opacity: 0;
  }

  18%,
  50% {
    opacity: 1;
  }
`
const simulationAnimation3 = keyframes`
  0%,
  50%,
  84%,
  100% {
    opacity: 0;
  }

  51%,
  83% {
    opacity: 1;
  }
`
export const simulations = {
  simulationAnimation1,
  simulationAnimation2,
  simulationAnimation3
}

export const effectChange = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  13%,
  46%,
  79% {
    transform: translateY(0);
    opacity: 1;
  }

  17%,
  18%,
  50%,
  51%,
  83%,
  84% {
    transform: translateY(5px);
    opacity: 0;
  }

  22%,
  55%,
  88% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
`
