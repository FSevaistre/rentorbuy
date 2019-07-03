import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ResponsiveComponent from 'react-responsive'
import { numeralPreakpoints } from '../../../core'
import * as S from './styles'

export class Mobile extends Component {
  render() {
    return <ResponsiveComponent maxWidth={719} {...this.props} />
  }
}
export class Tablet extends Component {
  render() {
    return <ResponsiveComponent minWidth={720} maxWidth={839} {...this.props} />
  }
}
export class MobileTablet extends Component {
  render() {
    return <ResponsiveComponent maxWidth={839} {...this.props} />
  }
}
export class Desktop extends Component {
  render() {
    return <ResponsiveComponent minWidth={720} {...this.props} />
  }
}

export class DesktopOnly extends Component {
  render() {
    return <ResponsiveComponent minWidth={840} {...this.props} />
  }
}

export const Responsive = ({ children, min, max }) => {
  const props = {}
  if (min) Object.assign(props, { minWidth: `${numeralPreakpoints[min]}px` })
  if (max) Object.assign(props, { maxWidth: `${numeralPreakpoints[max] - 1}px` })

  return <S.Responsive {...props}>{children}</S.Responsive>
}

Responsive.propTypes = {
  children: PropTypes.node.isRequired,
  min: PropTypes.oneOf(Object.keys(numeralPreakpoints)),
  max: PropTypes.oneOf(Object.keys(numeralPreakpoints))
}
