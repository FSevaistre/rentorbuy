import styled, { css } from 'styled-components'

import { colors, g, helpers } from '../../../core'

const noRadiusCard = coord => {
  return css`
  border-${coord}-radius: 0;
  
  &:before {
    border-${coord}-radius: 0;
  }
`
}

const formatCard = (name, variant) => {
  switch (name) {
    case 'full':
      return css`
        &,
        ${Content} {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
      `
    case 'full-height':
      return css`
        height: 100%;

        ${Content} {
          height: 100%;
        }
      `
    case 'center':
      return css`
        text-align: center;
      `
    case 'small':
      return css`
        border-radius: 4px;
        min-width: 136px;
      `
    case 'line':
      return css`
        border: 1px solid ${variant};
        background: ${colors.white};
        color: ${colors.neutral1.default};
      `
    case 'large-border':
      return css`
        border-width: 2px;
      `
    case 'small-radius':
      return css`
        border-radius: ${g(0.5)};
      `
    case 'dashed':
      return css`
        border-style: dashed;
      `

    default:
      break
  }
}
export const Card = styled.div`
  ${props => {
    const { zDepth, variant, format, noRadius, windowWidth, cardWidth, arrow } = props
    const color = colors[variant].default || colors[variant]
    return css`
      ${helpers.boxShadow(zDepth)};
      border-radius: ${g(1)};
      background-color: ${color};
      color: ${helpers.opposite(variant)};
      position: relative;
      transition: all 200ms ease-in-out;
      
      ${!arrow &&
        css`
          overflow: hidden;
        `}

      ${
        typeof noRadius === 'string'
          ? noRadiusCard(noRadius)
          : noRadius === true
          ? css`
              border-radius: 0;
            `
          : Array.isArray(noRadius) && noRadius.map(radius => noRadiusCard(radius))
      }

      ${
        typeof format === 'string'
          ? formatCard(format, color)
          : Array.isArray(format) && format.map(f => formatCard(f, color))
      }

    ${windowWidth > 0 &&
      windowWidth <= cardWidth &&
      css`
        border-left: 0;
        border-radius: 0;
        border-right: 0;
      `}

      `
  }}
`

export const Content = styled.div`
  position: relative;
`

export const Arrow = styled.div`
  position: absolute;
  border: ${g(1)} solid transparent;
  width: 0;
  height: 0;

  ${({ variant, position, translate }) => {
    const color = colors[variant].default || colors[variant]
    switch (position) {
      case 'top':
        return css`
          bottom: 100%;
          left: calc(50% - ${g(1)});
          border-bottom-color: ${color};

          ${translate &&
            css`
              left: inherit;
              ${translate};
            `}
        `
      case 'right':
        return css`
          top: calc(50% - ${g(1)});
          left: 100%;
          border-left-color: ${color};

          ${translate &&
            css`
              top: inherit;
              ${translate};
            `}
        `
      case 'bottom':
        return css`
          top: 100%;
          left: calc(50% - ${g(1)});
          border-top-color: ${color};

          ${translate &&
            css`
              left: inherit;
              ${translate};
            `}
        `
      case 'left':
        return css`
          top: calc(50% - ${g(1)});
          right: 100%;
          border-right-color: ${color};

          ${translate &&
            css`
              top: inherit;
              ${translate};
            `}
        `
      default:
        break
    }
  }}
`
