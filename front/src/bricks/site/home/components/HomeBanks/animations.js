import { keyframes } from 'styled-components'

const logoAnimation1 = keyframes`
  from {
    transform: rotate(0deg) translateX(4px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(4px) rotate(-360deg);
  }
`

const logoAnimation2 = keyframes`
  from {
    transform: rotate(0deg) translateX(-4px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(-4px) rotate(-360deg);
  }
`

const logoAnimation3 = keyframes`
  from {
    transform: rotate(360deg) translateX(-4px) rotate(-360deg);
  }
  to {
    transform: rotate(0deg) translateX(-4px) rotate(0deg);
  }
`

const logoAnimation4 = keyframes`
  from {
    transform: rotate(0deg) translateX(6px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(6px) rotate(-360deg);
  }
`

const logoAnimation5 = keyframes`
  from {
    transform: rotate(0deg) translateX(-6px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(-6px) rotate(-360deg);
  }
`

const logoAnimation6 = keyframes`
  from {
    transform: rotate(0deg) translateX(-2px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(-2px) rotate(-360deg);
  }
`

export const logos = {
  logoAnimation1,
  logoAnimation2,
  logoAnimation3,
  logoAnimation4,
  logoAnimation5,
  logoAnimation6
}

export const powerBounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`
