import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Content, Text } from '../../../index'

export default class WhiteLabelBanner extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props
    return (
      <Content variant="accent-1-d">
        <Text size="small" variant="white">
          {children}
        </Text>
      </Content>
    )
  }
}
