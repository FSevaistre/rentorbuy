import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Content, Icon, Progress, SubHeading, Text } from '../../../index'
import './UploadingFilesNotification.scss'

export default class UploadingFilesNotification extends PureComponent {
  static propTypes = {
    /** Current progress */
    current: PropTypes.number.isRequired,
    /** Max progress */
    max: PropTypes.number.isRequired
  }
  render() {
    const { current, max } = this.props
    return (
      <div className="uploading-files-notification">
        <Content size="x-small">
          <div className="uploading-files-notification--content">
            <div className="uploading-files-notification--content--icon">
              <Icon name="file" />
            </div>
            <SubHeading>Transfert en cours</SubHeading>
            <Text size="small">
              {current}/{max} documents reçus
            </Text>
          </div>
        </Content>
        <Progress value={current} max={max} />
      </div>
    )
  }
}
