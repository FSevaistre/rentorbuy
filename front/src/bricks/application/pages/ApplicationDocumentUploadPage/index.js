import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../index'
import * as S from './styles'

const ApplicationDocumentUploadPage = ({
  documentInformationProps,
  documents,
  locationSearch,
  metadataProps,
  onUpload,
  title
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)

  const goBackHref = `/application/documents${locationSearch}`

  return (
    <div>
      <B.Desktop>
        <B.ApplicationBreadcrumb goBackHref={goBackHref} items={[{ title: 'Documents', url: goBackHref }, { title }]} />
      </B.Desktop>

      <S.Page>
        <S.Header>
          <S.Wrapper>
            <S.Title>
              <B.Heading>{title}</B.Heading>
            </S.Title>

            <S.Metadata>
              {metadataProps.map(
                ({ icon, iconVariant = 'neutral-1-30', title, titleVariant = 'neutral-1', type }, index) => (
                  <S.MetadataItem key={index} numberOfItems={metadataProps.length}>
                    <S.MetadataItemIcon>
                      <B.Icon name={icon} variant={iconVariant} />
                    </S.MetadataItemIcon>

                    <B.Text variant={titleVariant}>{title}</B.Text>
                  </S.MetadataItem>
                )
              )}
            </S.Metadata>
          </S.Wrapper>
        </S.Header>

        <B.Divider variant="neutral-1-20" />

        <S.Content full>
          <B.Mobile>
            <S.Information>
              <B.DocumentInformation {...documentInformationProps} />
            </S.Information>
          </B.Mobile>

          <B.DesktopOnly>
            <S.Information>
              <B.DocumentInformation {...documentInformationProps} />
            </S.Information>
          </B.DesktopOnly>

          <B.Tablet>
            <B.DrawerVisible isOpen={isDrawerOpen} onOpen={handleToggleDrawer} onClose={handleToggleDrawer}>
              <S.Information>
                <B.DocumentInformation {...documentInformationProps} />
              </S.Information>
            </B.DrawerVisible>
          </B.Tablet>

          <S.UploadPanel>
            <B.Desktop>
              {documentInformationProps.errorMessage && (
                <S.ErrorMessage>
                  <B.Card variant="error-l">
                    <B.Content size="small">
                      <B.Text variant="error">{documentInformationProps.errorMessage}</B.Text>
                    </B.Content>
                  </B.Card>
                </S.ErrorMessage>
              )}
            </B.Desktop>

            <S.Upload>
              <B.Upload withRequirements onUpload={onUpload} />
            </S.Upload>

            <div>
              <S.DocumentListHeader>
                <B.SubHeading>Documents envoyés</B.SubHeading>
              </S.DocumentListHeader>

              <div>
                <B.ApplicationUploadedDocumentList documents={documents} />
              </div>
            </div>
          </S.UploadPanel>
        </S.Content>
      </S.Page>
    </div>
  )
}

ApplicationDocumentUploadPage.defaultProps = {
  locationSearch: ''
}

ApplicationDocumentUploadPage.propTypes = {
  title: PropTypes.string.isRequired,
  documentInformationProps: PropTypes.object.isRequired,
  documents: PropTypes.array.isRequired,
  locationSearch: PropTypes.string,
  metadataProps: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      variant: PropTypes.string
    })
  ).isRequired,
  onUpload: PropTypes.func.isRequired
}

export default ApplicationDocumentUploadPage
