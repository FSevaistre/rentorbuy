import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Content,
  DocumentInformation,
  DrawerVisible,
  Heading,
  Text,
  Upload,
  UploadedDocumentsList,
  Mobile,
  Tablet,
  Desktop,
  DesktopOnly,
  SubHeading
} from '../../../index'
import './UploadPage.scss'

export default class UploadPage extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    uploadProps: PropTypes.object,
    uploadedDocumentsListProps: PropTypes.object,
    documentInformationProps: PropTypes.object
  }
  state = {
    isDrawerOpen: false
  }

  handleToggleDrawer = () => this.setState(prevState => ({ isDrawerOpen: !prevState.isDrawerOpen }))

  render() {
    const { title, uploadProps, uploadedDocumentsListProps, documentInformationProps } = this.props
    const { status, errorMessage } = documentInformationProps
    return (
      <div className="upload-page">
        <div className="upload-page--container">
          <Mobile>
            <div className="upload-page--information">
              <DocumentInformation {...documentInformationProps} />
            </div>
          </Mobile>
          <DesktopOnly>
            <div className="upload-page--information">
              <DocumentInformation {...documentInformationProps} />
            </div>
          </DesktopOnly>
          <Tablet>
            <DrawerVisible
              isOpen={this.state.isDrawerOpen}
              onOpen={this.handleToggleDrawer}
              onClose={this.handleToggleDrawer}
            >
              <div className="upload-page--information">
                <DocumentInformation {...documentInformationProps} />
              </div>
            </DrawerVisible>
          </Tablet>
          <div className="upload-page--content">
            <Desktop>
              <div className="upload-page--content--title">
                <Heading>{title}</Heading>
              </div>
              {status === 'error' && errorMessage && (
                <div className="upload-page--content--error">
                  <Card variant="error-l">
                    <Content>
                      <Text variant="error">{errorMessage}</Text>
                    </Content>
                  </Card>
                </div>
              )}
            </Desktop>
            <div className="upload-page--content--upload">
              <Upload {...uploadProps} />
            </div>
            <div className="upload-page--content--list">
              <div className="upload-page--list-title">
                <SubHeading>Documents envoyés</SubHeading>
                <Text variant="neutral-1-40" format="bold">
                  {uploadedDocumentsListProps.documents.filter(doc => doc.isUploaded).length}
                </Text>
              </div>

              <UploadedDocumentsList {...uploadedDocumentsListProps} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
