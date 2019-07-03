import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../../..'
import './Form.scss'

const Form = ({ children }) => {
  return (
    <div className="form">
      {React.Children.map(children, (child, index) => {
        return (
          child && (
            <div key={index}>
              {index > 0 && index < children.length - 1 && (
                <div className="form--divider">
                  <Divider />
                </div>
              )}
              {child}
            </div>
          )
        )
      })}
    </div>
  )
}

Form.propTypes = {
  /** Children, separated by Divider as long as they are `FormSection` components. */
  children: PropTypes.node.isRequired
}

Form.defaultProps = {}

export default Form
