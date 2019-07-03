import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './InformationField.scss'

export default class InformationField extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    /** Component created by the container. Here for controlled elements*/
    component: PropTypes.element.isRequired
  }

  render() {
    const { label, component } = this.props
    return (
      <div className="information-field">
        <div className="information-field--label">{label}</div>
        <div className="information-field--input">{component}</div>
      </div>
    )
  }
}
