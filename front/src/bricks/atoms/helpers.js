import { css } from 'styled-components'
import flatten from 'lodash/flatten'

import colors from './colors'

export const boxShadow = depth => {
  if (depth === 0) {
    return css`
      box-shadow: none;
    `
  }

  if (depth === 1) {
    return css`
      box-shadow: 0 2px 10px 0 ${colors.neutral1.fade(20)};
    `
  }

  if (depth === 2) {
    return css`
      box-shadow: 0 4px 20px 0 ${colors.neutral1.fade(15)};
    `
  }

  if (depth === 3) {
    return css`
      box-shadow: 0 6px 30px 0 ${colors.neutral1.fade(15)};
    `
  }
}

const lightness = variant => [
  `${variant}-l`,
  `${variant}-10`,
  `${variant}-20`,
  `${variant}-30`,
  `${variant}-40`,
  `${variant}-50`
]
const darkness = variant => [`${variant}-d`, `${variant}-60`, `${variant}-70`, `${variant}-80`, `${variant}-90`]

const palette = [
  'primary-1',
  'primary-2',
  'neutral-1',
  'accent-1',
  'accent-2',
  'accent-3',
  'accent-4',
  'accent-5',
  'success',
  'error',
  'warning'
]
const light = flatten(palette.map(variant => lightness(variant).map(color => color)))
const dark = flatten(palette.map(variant => darkness(variant).map(color => color)))

export const opposite = variant => {
  if ([...light, 'white'].includes(variant)) return colors['neutral-1']
  return colors.white
}
