import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SubMenu } from '../../../index'
import { compact } from 'lodash'

export default class SimulationActions extends PureComponent {
  static propTypes = {
    /** If Save button is disabled. */
    isSaveDisabled: PropTypes.bool,
    /** If Save button is disabled. */
    isEditDisabled: PropTypes.bool,
    /** onClick function. */
    onSubscribe: PropTypes.func.isRequired,
    /** onClick function. */
    onOptimize: PropTypes.func.isRequired,
    /** onClick function. */
    onModify: PropTypes.func.isRequired,
    /** if Optimize button is enabled. */
    isOptimizeEnabled: PropTypes.bool
  }

  render() {
    const { onSubscribe, onOptimize, onModify, isOptimizeEnabled, isSaveDisabled, isEditDisabled } = this.props
    const buttons = compact([
      isOptimizeEnabled && { label: 'Optimiser', onClick: onOptimize, icon: 'thumb-up' },
      !isSaveDisabled && { label: 'Sauvegarder', onClick: onSubscribe, icon: 'bookmark' },
      !isEditDisabled && { label: 'Modifier votre simulation', onClick: onModify, icon: 'pen' }
    ])
    return (
      <div className="simulation-actions">
        <SubMenu actions={buttons} format="align-right" />
      </div>
    )
  }
}
