import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../index'
import './CapacityActions.scss'

export default class CapacityActions extends PureComponent {
  static propTypes = {
    onEditProfile: PropTypes.func,
    onSave: PropTypes.func
  }
  render() {
    const { onEditProfile, onSave } = this.props
    return (
      <div className="capacity-actions">
        {onSave && (
          <div className="capacity-actions__action">
            <Button format="flat" onClick={onSave} iconProps={{ name: 'bookmark', variant: 'primary-1' }}>
              Sauvegarder
            </Button>
          </div>
        )}
        <div className="capacity-actions__action">
          <Button format="flat" onClick={onEditProfile} iconProps={{ name: 'pen', variant: 'primary-1' }}>
            Modifier votre profil
          </Button>
        </div>
      </div>
    )
  }
}
