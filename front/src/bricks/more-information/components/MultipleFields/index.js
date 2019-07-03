import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CardField } from '../../../index'
import './MultipleFields.scss'

export default class MultipleFields extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    onModify: PropTypes.func,
    onClose: PropTypes.func,
    type: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        component: PropTypes.element
      })
    )
  }

  render() {
    const { title, fields, onDelete, onModify, onClose, type } = this.props
    const cardFieldProps = {
      title,
      onDelete,
      onModify,
      onClose,
      type,
      content: (
        <div className="multiple-fields--content">
          {fields.map(field => {
            const { name, component } = field
            return (
              <div className="multiple-fields--content--component" key={name}>
                {component}
              </div>
            )
          })}
        </div>
      )
    }
    return (
      <div className="multiple-fields">
        <CardField {...cardFieldProps} />
      </div>
    )
  }
}
