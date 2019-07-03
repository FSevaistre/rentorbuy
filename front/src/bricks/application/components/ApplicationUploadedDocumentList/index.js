import PropTypes from 'prop-types'
import React from 'react'

import * as B from '../../../index'
import * as S from './styles'

const ApplicationUploadedDocumentList = ({ documents }) => (
  <div>
    {!documents.length ? (
      <S.NoDocuments>
        <B.Content>Aucun document envoyé</B.Content>
      </S.NoDocuments>
    ) : (
      <S.Documents>
        {documents.map(document => {
          return (
            <S.UploadedDocument key={document.id}>
              <B.UploadedDocument {...document} />
            </S.UploadedDocument>
          )
        })}
      </S.Documents>
    )}
  </div>
)

ApplicationUploadedDocumentList.propTypes = {
  /** Array of document with each document with `{uploadedDocumentProps: {}}`. */
  documents: PropTypes.array.isRequired,
  /** Progress of UploadedDocument. */
  progressProps: PropTypes.node,
  /** is Document Uploaded. */
  isUploaded: PropTypes.bool,
  /** Delete function of document. */
  onDelete: PropTypes.func
}

export default ApplicationUploadedDocumentList
