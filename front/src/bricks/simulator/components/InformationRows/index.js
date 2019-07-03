import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { InformationRow } from '../../../index'
import './InformationRows.scss'

export default class InformationRows extends PureComponent {
  static propTypes = {
    /** Array of <code>[InformationRow](/#!/InformationRow)</code> props coponents. */
    rows: PropTypes.arrayOf(PropTypes.shape({})).isRequired
  }

  render() {
    const { rows } = this.props
    return (
      <div className="information-rows">
        {rows.map((row, index) => {
          return (
            <div key={index} className="information-rows--row">
              <InformationRow {...row} />
            </div>
          )
        })}
      </div>
    )
  }
}
