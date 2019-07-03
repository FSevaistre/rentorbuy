import styled, { css } from 'styled-components'

import { colors, g, layout, tablet } from '../../../core'

const textSize = 18

export const SubHeading = styled.div`
  color: ${({ variant }) => colors[variant] || 'inherit'};
  font-family: 'Circular Std', sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ format }) => {
    switch (format) {
      case 'card-title':
        return css`
          opacity: 0.6;
          text-transform: uppercase;
        `

      case 'inherit':
        return css`
          color: inherit;
        `

      case 'hyphen':
        return css`
          overflow: visible;
          padding-left: ${g(3)};
          position: relative;

          @media only screen and (min-width: ${tablet.min}) {
            padding-left: 0;
          }

          &:before {
            background-color: ${colors.primary1.default};
            content: '';
            display: block;
            height: ${g(1 / 4)};
            left: 0;
            position: absolute;
            width: ${g(2)};

            @media only screen and (min-width: ${tablet.min}) {
              left: ${g(-3)};
            }

            ${({ size }) => {
              switch (size) {
                case 'small':
                  return css`
                    top: ${g(3 / 2)};
                  `

                case 'large':
                  return css`
                    top: ${(textSize + layout.layoutBase) / 2}px;

                    @media only screen and (min-width: ${tablet.min}) {
                      top: ${g(4 / 2)};
                    }
                  `

                default:
                  return css`
                    top: ${(textSize + layout.layoutBase) / 2}px;
                  `
              }
            }}
          }
        `

      default:
        return ''
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          line-height: ${g(3)};
          letter-spacing: 0;
          font-family: 'Work Sans', sans-serif;
          font-size: ${g(2)};
          font-weight: 700;
        `

      case 'large':
        return css`
          line-height: ${textSize + layout.layoutBase}px;
          letter-spacing: 0.2px;
          font-size: ${textSize}px;

          @media only screen and (min-width: ${tablet.min}) {
            line-height: ${g(4)};
            font-size: ${g(3)};
          }
        `

      default:
        return css`
          line-height: ${textSize + layout.layoutBase}px;
          letter-spacing: 0.2px;
          font-size: ${textSize}px;
        `
    }
  }}
`
