import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Content, Icon, Text } from '../../../index'
import './DeletedFileNotification.scss'

export default class DeletedFileNotification extends PureComponent {
  static propTypes = {
    /** Name of file. */
    fileName: PropTypes.string
  }
  render() {
    const { fileName } = this.props
    return (
      <Content size="x-small">
        <div className="deleted-file-notification">
          <div className="deleted-file-notification--icon">
            <Icon name="trash" variant="success" />
          </div>
          <Text size="small">
            Votre fichier <strong>{fileName}</strong> a bien été supprimé.
          </Text>
        </div>
      </Content>
    )
  }
}
