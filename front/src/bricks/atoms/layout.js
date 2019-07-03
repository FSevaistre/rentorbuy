export const layoutBase = 8

export const g = multiple => `${multiple * layoutBase}px`

export const mobile = {
  default: '600px',
  min: '320px',
  max: '450px'
}

export const tablet = {
  min: '720px',
  max: '840px'
}

export const desktop = {
  default: '1240px',
  min: '1024px'
}

export const numeralPreakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  desktop: 1240
}

const bp = {}
Object.entries(numeralPreakpoints).forEach(([key, val]) => {
  Object.assign(bp, { [key]: `${val}px` })
})
export const breakpoints = bp
