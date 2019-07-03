import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Content } from '../../../index'
import './PrivacyActions.scss'

export default class PrivacyActions extends PureComponent {
  static propTypes = {
    onValidate: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  }
  render() {
    const { onValidate, onCancel } = this.props
    return (
      <div className="privacy-action">
        <Card variant="white" zDepth={2} noRadius={['bottom-right', 'bottom-left']}>
          <Content>
            <div className="privacy-action--buttons">
              <div className="privacy-action--buttons--cancel">
                <Button onClick={onCancel} variant="white">
                  Refuser
                </Button>
              </div>
              <Button onClick={onValidate} variant="accent-1">
                Accepter
              </Button>
            </div>
          </Content>
        </Card>
      </div>
    )
  }
}
