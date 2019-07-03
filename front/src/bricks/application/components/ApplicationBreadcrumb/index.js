import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import * as B from '../../../index'
import * as S from './styles'

const ApplicationBreadcrumb = ({ goBackHref, items }) => (
  <S.Breadcrumb>
    <S.Wrapper>
      <B.Link href={goBackHref}>
        <S.Arrow>
          <B.Icon name="arrow-left" />
        </S.Arrow>
      </B.Link>

      <B.Link href="/application">
        <S.BreadcrumbItem>
          <B.Text size="small">Votre dossier</B.Text>
        </S.BreadcrumbItem>
      </B.Link>

      {items.map(({ title, url }, index) => (
        <Fragment key={title}>
          <B.Icon name="dash" variant="neutral-1-40" />

          {index === items.length - 1 ? (
            <S.BreadcrumbItem active>
              <B.Text size="small">{title}</B.Text>
            </S.BreadcrumbItem>
          ) : (
            <B.Link href={url}>
              <S.BreadcrumbItem>
                <B.Text size="small">{title}</B.Text>
              </S.BreadcrumbItem>
            </B.Link>
          )}
        </Fragment>
      ))}
    </S.Wrapper>
  </S.Breadcrumb>
)

ApplicationBreadcrumb.defaultProps = {
  goBackHref: '/application'
}

ApplicationBreadcrumb.propTypes = {
  /** Where to lead the user to when goBack button is pressed. */
  goBackHref: PropTypes.string,
  /** Breadcrumb items. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string
    })
  )
}

export default ApplicationBreadcrumb
