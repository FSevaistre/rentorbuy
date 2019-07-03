import React from 'react'
import PropTypes from 'prop-types'
import { AlertTemplate, DirectionsClientCard, DirectionsSimulationCard } from '../../../index'
import './DirectionsPage.scss'

const DirectionsPage = ({ title, description, alert, alertKind, clientCardProps, simulationCardProps }) => {
  return (
    <div className="directions-page">
      <AlertTemplate title={title} description={description} alert={alert} alertKind={alertKind}>
        <div className="directions-page--cards">
          <div className="directions-page--card">
            <DirectionsSimulationCard {...simulationCardProps} />
          </div>
          <div className="directions-page--card">
            <DirectionsClientCard {...clientCardProps} />
          </div>
        </div>
      </AlertTemplate>
    </div>
  )
}

DirectionsPage.propTypes = {
  description: PropTypes.node,
  title: PropTypes.string,
  alert: PropTypes.node,
  alertKind: PropTypes.string,
  clientCardProps: PropTypes.object,
  simulationCardProps: PropTypes.object
}
DirectionsPage.defaultProps = {
  alertKind: 'error'
}

export default DirectionsPage
