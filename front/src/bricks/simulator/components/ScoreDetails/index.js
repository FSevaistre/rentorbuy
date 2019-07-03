import PropTypes from 'prop-types'
import React from 'react'
import { Content, Text } from '../../../index'
import './ScoreDetails.scss'

const ScoreDetails = ({ description, label }) => (
  <div className="score-details">
    <Content>
      <div className="score-details--infos">
        Pretto estime la facilité à trouver un financement pour le projet que vous avez décrit. Cette première
        estimation doit être affinée par un expert Pretto.
      </div>

      <div className="score-details--section">
        <div className="score-details--section--description">
          <Text>
            Votre projet est {label}. {description}
          </Text>
        </div>
      </div>
    </Content>
  </div>
)

ScoreDetails.propTypes = {
  /** Description of the score. */
  description: PropTypes.string.isRequired,
  /** Label of the score. */
  label: PropTypes.string.isRequired
}

export default ScoreDetails
