import React from 'react'

import * as B from '../../../index'
import * as S from './styles'

const ApplicationDocumentsPage = ({ documentGroups, documentsFiltersProps }) => (
  <div>
    <B.Desktop>
      <B.ApplicationBreadcrumb items={[{ title: 'Documents' }]} />
    </B.Desktop>

    <S.Wrapper full>
      <S.Filters>
        <B.ApplicationDocumentsFilters {...documentsFiltersProps} />
      </S.Filters>

      <S.Documents>
        {documentGroups.length === 0 && (
          <S.Alert>
            <B.Content>
              <div>Désolé, aucun document ne correspond à votre sélection.</div>
              <div>
                <S.EditFilters onClick={documentsFiltersProps.onToggle}>Modifier les filtres</S.EditFilters>
              </div>
            </B.Content>
          </S.Alert>
        )}

        {documentGroups.map((group, index) => (
          <S.List key={index}>
            <B.ApplicationDocumentList documents={group.documents} group={group.title} />
          </S.List>
        ))}
      </S.Documents>
    </S.Wrapper>
  </div>
)

export default ApplicationDocumentsPage
