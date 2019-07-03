import 'katex/dist/katex.css'
import styled, { createGlobalStyle } from 'styled-components'

import { colors, colorHelpers, g } from '../../../core'

export const Container = styled.div`
  background-attachment: local, local, scroll, scroll;

  background-image: linear-gradient(to right, ${colors.white} 40%, ${colorHelpers.fade(colors.white, 0)}),
    linear-gradient(to left, ${colors.white} 40%, ${colorHelpers.fade(colors.white, 0)}),
    radial-gradient(0 50%, farthest-side, ${colors.neutral1.fade(20)} 40%, ${colors.neutral1.fade(0)}),
    radial-gradient(100% 50%, farthest-side, ${colors.neutral1.fade(20)} 40%, ${colors.neutral1.fade(0)});

  background-image: linear-gradient(to right, ${colors.white} 40%, ${colorHelpers.fade(colors.white, 0)}),
    linear-gradient(to left, ${colors.white} 40%, ${colorHelpers.fade(colors.white, 0)}),
    radial-gradient(farthest-side at 0 50%, ${colors.neutral1.fade(20)} 40%, ${colors.neutral1.fade(0)}),
    radial-gradient(farthest-side at 100% 50%, ${colors.neutral1.fade(20)} 40%, ${colors.neutral1.fade(0)});

  background-position: 0 0, 100% 0, 0 0, 100% 0;
  background-repeat: no-repeat;
  background-size: ${g(5)} 100%, ${g(5)} 100%, ${g(1)} 100%, ${g(1)} 100%;
  overflow-x: auto;
  overflow-y: hidden;
`

export const GlobalStyle = createGlobalStyle`
  .katex {
    text-align: left !important;
  }

  .katex-display {
    margin: 0 !important;
    text-align: left !important;
  }
`
