import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, Button, Emoji, SubHeading } from '../../../index'
import './DirectionsSimulationCard.scss'

const DirectionsSimulationCard = ({ emoji, title, description, buttonText, onClick }) => (
  <div className="directions-simulation-card">
    <Card variant="primary-1" zDepth={2} format="full-height">
      <Content format="full-height">
        <div className="directions-simulation-card--title">
          <div className="directions-simulation-card--title--img">
            <Emoji size="medium">{emoji}</Emoji>
          </div>
          <div className="directions-simulation-card--title--text">
            <SubHeading size="large" variant="white">
              {title}
            </SubHeading>
          </div>
        </div>
        <div className="directions-simulation-card--content">{description}</div>
        <div className="directions-simulation-card--button">
          <Content>
            <Button format="full" variant="white" textVariant="primary-1" onClick={onClick}>
              {buttonText}
            </Button>
          </Content>
        </div>
      </Content>
    </Card>
  </div>
)

DirectionsSimulationCard.propTypes = {
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default memo(DirectionsSimulationCard)
