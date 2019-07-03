import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Content, Icon, SubHeading, Text } from '../../../index'
import './CompletedFilesNotification.scss'

export default class CompletedFilesNotification extends PureComponent {
  static propTypes = {
    /** Name of document's category. */
    category: PropTypes.string
  }
  render() {
    const { category } = this.props
    return (
      <Content size="x-small">
        <div className="completed-files-notification">
          <div className="completed-files-notification--icon">
            <Icon name="check" variant="primary-1" />
          </div>
          <div className="completed-files-notification--content">
            <SubHeading>Documents reçus</SubHeading>
            <Text size="small">Nous avons bien reçu vos documents{category && ` « ${category} »`}.</Text>
          </div>
        </div>
      </Content>
    )
  }
}
