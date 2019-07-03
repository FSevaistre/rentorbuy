import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, Divider, Text, UploadedDocument, Mobile, Desktop } from '../../../index'
import './UploadedDocumentsList.scss'

class Documents extends PureComponent {
  static propTypes = {
    documents: PropTypes.array.isRequired,
    errorUpload: PropTypes.any
  }
  render() {
    const { documents, errorUpload } = this.props
    return documents.map((doc, i) => {
      const isLast = i === documents.length - 1
      const errorProps = errorUpload && { isUploaded: true }
      return (
        <div key={doc.id} className="uploaded-documents-list--elem">
          <UploadedDocument {...doc} {...errorProps} />
          {!isLast ? (
            <div>
              <Mobile>
                <Divider />
              </Mobile>
              <Desktop>
                <Divider variant="white" />
              </Desktop>
            </div>
          ) : (
            <Mobile>
              <Divider />
            </Mobile>
          )}
        </div>
      )
    })
  }
}
export default class UploadedDocumentsList extends PureComponent {
  static propTypes = {
    /** Array of document with each document with `{uploadedDocumentProps: {}}`. */
    documents: PropTypes.array.isRequired,
    /** Progress of UploadedDocument. */
    progressProps: PropTypes.node,
    /** is Document Uploaded. */
    isUploaded: PropTypes.bool,
    /** Delete function of document. */
    onDelete: PropTypes.func,
    /** should be a node or falsy. */
    errorUpload: PropTypes.any
  }

  render() {
    const { documents, errorUpload } = this.props
    return (
      <div className="uploaded-documents-list">
        {errorUpload && (
          <div className="uploaded-documents-list--error">
            <Card variant="error">
              <Content size="small">
                <Text variant="white">
                  Désolé, nous n{"'"}
                  avons pas pu supprimer votre document.
                </Text>
              </Content>
            </Card>
          </div>
        )}
        {!documents.length ? (
          <div className="uploaded-documents-list--empty">
            <Card variant="accent-1-l">
              <Content size="small">
                Vous n{"'"}
                avez envoyé aucun document pour l{"'"}
                instant.
              </Content>
            </Card>
          </div>
        ) : (
          <Fragment>
            <Mobile>
              <Documents {...{ documents, errorUpload }} />
            </Mobile>
            <Desktop>
              <Card>
                <Documents {...{ documents, errorUpload }} />
              </Card>
            </Desktop>
          </Fragment>
        )}
      </div>
    )
  }
}
