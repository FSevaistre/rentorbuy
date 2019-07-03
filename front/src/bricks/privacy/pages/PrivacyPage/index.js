import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Content,
  Divider,
  PrivacyActions,
  PrivacyContact,
  PrivacyDelete,
  PrivacyInformations,
  PrivacyPoints
} from '../../../index'

export default class PrivacyPage extends PureComponent {
  static propTypes = {
    privacyActionsProps: PropTypes.object
  }
  render() {
    const { privacyActionsProps } = this.props
    return (
      <div className="privacy-page">
        <Content>
          <div className="privacy-page--points">
            <PrivacyPoints />
          </div>
          {!privacyActionsProps && (
            <div className="privacy-page--delete">
              <PrivacyDelete />
            </div>
          )}
          <div className="privacy-page--informations">
            <PrivacyInformations />
          </div>
          <Divider />
          <div className="privacy-page--contact">
            <PrivacyContact />
          </div>
          {privacyActionsProps && (
            <div className="privacy-page--actions">
              <PrivacyActions {...privacyActionsProps} />
            </div>
          )}
        </Content>
      </div>
    )
  }
}
