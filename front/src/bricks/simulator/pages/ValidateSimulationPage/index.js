import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SubHeading, SummaryChanges } from '../../../index'
import './ValidateSimulationPage.scss'

export default class ValidateSimulationPage extends PureComponent {
  static propTypes = {
    currentProject: PropTypes.object,
    newProject: PropTypes.object,
    bubbleChat: PropTypes.node
  }

  render() {
    const { currentProject, newProject, bubbleChat } = this.props
    return (
      <div className="validate-simulation-page">
        <div className="validate-simulation-page--bubble">{bubbleChat}</div>
        <div className="validate-simulation-page--title">
          <SubHeading>Choisissez le projet que vous voulez enregistrer</SubHeading>
        </div>
        <div className="validate-simulation-page--summaries">
          <div className="validate-simulation-page--summaries--summary validate-simulation-page--summaries--summary--new">
            <SummaryChanges type="new" {...newProject} />
          </div>
          <div className="validate-simulation-page--summaries--summary">
            <SummaryChanges type="current" {...currentProject} />
          </div>
        </div>
      </div>
    )
  }
}
