import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Content, DialogTemplate, Dialog } from '../../../index'
import './DialogFields.scss'

export default class DialogFields extends Component {
  static propTypes = {
    title: PropTypes.number.isRequired,
    onClose: PropTypes.func,
    onValidate: PropTypes.func,
    isOpen: PropTypes.bool,
    isButtonDisabled: PropTypes.bool,
    type: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        component: PropTypes.element
      })
    )
  }

  render() {
    const { fields, onClose, isOpen, onValidate, isButtonDisabled, title } = this.props
    const props = {
      buttonProps: {
        onClick: onValidate,
        children: 'Valider',
        disabled: isButtonDisabled
      },
      navbarProps: {
        title,
        iconLeft: 'cross',
        iconLeftAction: onClose,
        variant: 'white'
      },
      onClose,
      children: (
        <Content>
          <div className="dialog-fields--content">
            {fields.map(field => {
              const { name, component } = field
              return (
                <div className="dialog-fields--content--component" key={name}>
                  {component}
                </div>
              )
            })}
          </div>
        </Content>
      )
    }
    return (
      <Dialog isOpen={isOpen} onRequestClose={onClose}>
        <div className="dialog-fields">
          <DialogTemplate {...props} />
        </div>
      </Dialog>
    )
  }
}
