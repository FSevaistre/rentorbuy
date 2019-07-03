import { keyframes } from 'styled-components'

const wave3 = keyframes`
  45% {
    opacity: 0.05;
  }
  60% {
    opacity: 0.5;
  }
  80% {
    opacity: 0.05;
  }
`

const wave4 = keyframes`
  35% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.6;
  }
  70% {
    opacity: 0.1;
  }
`

const wave5 = keyframes`
  25% {
    opacity: 0.16;
  }
  40% {
    opacity: 0.7;
  }
  60% {
    opacity: 0.16;
  }
`

const wave6 = keyframes`
  15% {
    opacity: 0.22;
  }
  30% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.22;
  }
`

const wave7 = keyframes`
  5% {
    opacity: 0.35;
  }
  20% {
    opacity: 0.85;
  }
  40% {
    opacity: 0.35;
  }
`

const wave8 = keyframes`
  0% {
    opacity: 0.3;
  }
  10% {
    opacity: 0.85;
  }
  30% {
    opacity: 0.3;
  }
`

export const waves = {
  wave3,
  wave4,
  wave5,
  wave6,
  wave7,
  wave8
}
