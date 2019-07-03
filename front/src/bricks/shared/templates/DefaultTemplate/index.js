import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Text, Desktop } from '../../../index'
import './DefaultTemplate.scss'

const DefaultTemplate = ({ children, title, description }) => {
  return (
    <div className="template--default">
      <div className="wrapper height-wrapper">
        <header>
          <Desktop>
            <div className="template--default--heading">
              <Heading format="center">{title}</Heading>
            </div>
          </Desktop>
          <div className="template--default--description">
            <Text format="center">{description}</Text>
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}

DefaultTemplate.propTypes = {
  children: PropTypes.node,
  hasOptions: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string
}

export default DefaultTemplate
