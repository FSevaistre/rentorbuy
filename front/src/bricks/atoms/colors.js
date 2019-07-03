import Color from 'color'
import clamp from 'lodash/clamp'
import range from 'lodash/range'

import * as palette from './palette'

// LOGIC
const funcToColor = (color, ...args) => {
  if (typeof color === 'function') {
    return color.apply(null, args)
  }

  return color
}

const getNameForNuance = (colorName, nuance) => {
  if (['dark', 'light'].includes(nuance)) {
    return `${colorName}-${nuance.slice(0, 1)}`
  }

  return colorName
}

const getRawColorName = colorName => {
  if (['error', 'success', 'warning'].includes(colorName)) {
    return colorName + 'State'
  }

  return colorName
}

// COLOR MANIPULATION
export const darken = (color, coefficient) =>
  Color(color)
    .lightness(clamp(Color(color).lightness() - coefficient, 0, 100))
    .hex()
    .toLowerCase()

export const fade = (color, alpha) =>
  Color(color)
    .alpha(alpha / 100)
    .rgb()
    .string()

export default Object.keys(palette).reduce((previous, rawColorName) => {
  const colorValue = palette[rawColorName]
  const colorName = rawColorName.replace(/([\d]+)/g, '-$1').replace(/([A-Z]+)/g, match => `-${match.toLowerCase()}`)

  if (typeof colorValue === 'string') {
    return { ...previous, [colorName]: funcToColor(colorValue, { darken, fade }) }
  }

  if (typeof colorValue !== 'object') {
    return previous
  }

  return Object.keys(colorValue).reduce(
    (previous, nuance) => ({
      ...previous,
      [getRawColorName(rawColorName)]: { ...colorValue, fade: fade.bind(null, colorValue.default) },
      [getNameForNuance(colorName, nuance)]: funcToColor(colorValue[nuance], { darken, fade }),
      ...range(9).reduce(
        (previous, index) => ({
          ...previous,
          [`${colorName}-${(index + 1) * 10}`]: fade(colorValue.default, (index + 1) * 10)
        }),
        {}
      )
    }),
    previous
  )
}, palette)
