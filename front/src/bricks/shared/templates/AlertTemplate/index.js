import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Card, Content, Text } from '../../../index'
import './AlertTemplate.scss'

const COLORS = {
  error: {
    background: 'error-l',
    text: 'error'
  },
  information: {
    background: 'accent-1-l',
    text: 'accent-1'
  }
}

const AlertTemplate = ({ children, title, description, alert, alertKind }) => {
  const { background, text } = COLORS[alertKind]
  return (
    <div className="alert-template">
      <div className="alert-template--header">
        <div className="alert-template--header--title">
          <Heading size="large">{title}</Heading>
        </div>
        {description && <div className="alert-template--header--description">{description}</div>}
        {alert && (
          <div className="alert-template--header--alert">
            <Card variant={background}>
              <Content>
                <Text variant={text}>{alert}</Text>
              </Content>
            </Card>
          </div>
        )}
      </div>
      <div className="alert-template--wrapper">
        <div className="alert-template--content">{children}</div>
      </div>
    </div>
  )
}

AlertTemplate.propTypes = {
  children: PropTypes.node,
  description: PropTypes.node,
  title: PropTypes.string,
  alert: PropTypes.node,
  alertKind: PropTypes.oneOf(Object.keys(COLORS))
}
AlertTemplate.defaultProps = {
  alertKind: 'error'
}

export default AlertTemplate
