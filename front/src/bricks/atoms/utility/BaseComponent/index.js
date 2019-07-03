import React from 'react'
import PropTypes from 'prop-types'

const BaseComponent = ({ type, ...props }) => React.createElement(type, props)

BaseComponent.propTypes = {
  type: PropTypes.string
}

BaseComponent.defaultProps = {
  type: 'div'
}

export default BaseComponent
