import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, Button, SubHeading } from '../../../index'
import './DirectionsClientCard.scss'

const DirectionsClientCard = ({ title, description, buttonText, onClick }) => (
  <div className="directions-client-card">
    <Card variant="white" zDepth={2}>
      <Content format="full-height">
        <div className="directions-client-card--title">
          <div className="directions-client-card--title--text">
            <SubHeading size="large">{title}</SubHeading>
          </div>
        </div>
        <div className="directions-client-card--content">{description}</div>
        <div className="directions-client-card--button">
          <Content>
            <Button format="full" onClick={onClick}>
              {buttonText}
            </Button>
          </Content>
        </div>
      </Content>
    </Card>
  </div>
)

DirectionsClientCard.propTypes = {
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default memo(DirectionsClientCard)
