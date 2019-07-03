import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Content, Text } from '../../../index'
import './DeletingFileNotification.scss'

export default class DeletingFileNotification extends PureComponent {
  static propTypes = {
    /** Name of file. */
    fileName: PropTypes.string
  }
  render() {
    const { fileName } = this.props
    return (
      <Content size="x-small" variant="error-l">
        <div className="deleting-file-notification">
          <Text size="small" variant="error">
            Suppression du fichier <strong>{fileName}</strong>.
          </Text>
        </div>
      </Content>
    )
  }
}
