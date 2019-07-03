// THEME
export const primary1 = {
  default: '#35ae77',
  light: '#d3f5e4',
  dark: '#26895c'
}

export const primary2 = {
  default: '#8acab7',
  light: '#e8f4f1',
  dark: '#42b491'
}

export const neutral1 = {
  default: '#173753',
  light: '#edf1f5',
  dark: '#122a3e'
}

export const accent1 = {
  default: '#1098f7',
  light: '#cfeafd',
  dark: '#1e88d2'
}

export const accent2 = {
  default: '#50cdeb',
  light: '#e5f8fc',
  dark: '#18b2d7'
}

export const accent3 = {
  default: '#ffac14',
  light: '#fff8ec',
  dark: '#f08a4b'
}

export const accent4 = {
  default: '#8474ef',
  light: '#e9dffb',
  dark: '#661de2'
}

export const accent5 = {
  default: '#de235b',
  light: '#f8e4ea',
  dark: '#b3073a'
}

// STATUS
export const success = {
  default: '#128c74',
  light: '#ddefea',
  dark: ({ darken }) => darken(success.default, 10)
}

export const warning = {
  default: '#e88040',
  light: '#fbebe0',
  dark: ({ darken }) => darken(warning.default, 10)
}

export const error = {
  default: '#b73246',
  light: '#f5e2e5',
  dark: ({ darken }) => darken(error.default, 10)
}

// SOCIALS
export const facebook = {
  default: '#4267b2'
}

export const linkedin = {
  default: '#3b5998'
}

export const twitter = {
  default: '#1da1f2'
}

export const whatsapp = {
  default: '#25d366'
}

// EXTRA
export const gradientPrimary1 = `linear_gradient(90deg, ${primary1.default}, ${primary1.light})`
export const gradientPrimary2 = `linear_gradient(90deg, ${primary2} 0%, ${primary1.default} 100%)`
export const gradientPrimary3 = `linear_gradient(90deg, ${primary1.default}, ${accent2.default})`

export const white = '#ffffff'
