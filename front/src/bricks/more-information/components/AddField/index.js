import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Content } from '../../../index'
import './AddField.scss'

export default class AddField extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    children: PropTypes.node
  }

  render() {
    const { children, onAdd } = this.props
    return (
      <div className="add-field" onClick={onAdd}>
        <Content>
          <div className="add-field--content">
            <div className="add-field--content--button">
              <Button format="circle" size="x-small" iconProps={{ name: 'add' }} />
            </div>
            <div className="add-field--content--text">{children}</div>
          </div>
        </Content>
      </div>
    )
  }
}
