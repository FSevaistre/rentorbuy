import PropTypes from 'prop-types'
import React, { createElement, Fragment, memo } from 'react'

import * as B from '../../../index'
import * as S from './styles'

const COMPLETE_FORM_LABEL = [
  'Terminé !',
  'Bravo 👏',
  'Good job',
  'Well done',
  'Bien joué',
  "Ça, c'est fait",
  'Bon boulot',
  'Beau travail',
  'Parfait',
  "Hop, c'est complet",
  'Hourra',
  'Wahou',
  'Mission accomplie',
  "Ça c'est réglé"
]
const COMPLETE_DOCUMENTS_LABEL = [...COMPLETE_FORM_LABEL, 'Bien reçu', 'Roger ✈️', "C'est envoyé"]

const ApplicationCard = ({
  description,
  documentsHref,
  documentsOnClick,
  documentsStatus,
  formHref,
  formOnClick,
  formStatus,
  hasDocuments,
  id,
  index,
  title,
  type
}) => (
  <S.Card {...(id ? { id } : {})}>
    <S.Title>
      <B.SubHeading size="large">{title}</B.SubHeading>
    </S.Title>

    {description && (
      <B.Link href={formHref} onClick={formOnClick}>
        <S.Row>
          <S.Label>
            <S.LabelIcon>
              <B.Icon
                name={formStatus === 'complete' ? 'check-2' : type === 'individual' ? 'user' : 'text'}
                variant={formStatus === 'complete' ? 'primary-1' : 'neutral-1'}
              />
            </S.LabelIcon>

            <B.Text size="small">{description}</B.Text>
          </S.Label>

          {formStatus === 'complete' && (
            <S.Action>
              <B.Tag size="large" variant="success">
                {COMPLETE_FORM_LABEL[index % COMPLETE_FORM_LABEL.length]}
              </B.Tag>

              <S.ActionIcon>
                <B.Icon name="pen" variant="primary-1" />
              </S.ActionIcon>
            </S.Action>
          )}

          {formStatus !== 'complete' && (
            <S.Action>
              <S.ActionLabel>
                <B.Text variant="accent-1">
                  <strong>Remplir</strong>
                </B.Text>
              </S.ActionLabel>

              <S.ActionIcon>
                <B.Icon name="arrow-right" variant="accent-1" />
              </S.ActionIcon>
            </S.Action>
          )}
        </S.Row>
      </B.Link>
    )}

    {hasDocuments && (
      <div>
        {documentsStatus === 'incomplete' && (
          <S.Alert>
            <S.Content>
              <B.Text size="small" variant="accent-1-d">
                <strong>
                  Remplissez les informations &laquo;&nbsp;{title}&nbsp;&raquo; pour envoyer les documents
                  correspondants.
                </strong>
              </B.Text>
            </S.Content>
          </S.Alert>
        )}

        {description && documentsStatus !== 'incomplete' && <B.Divider variant="neutral-1-20" />}

        {createElement(
          documentsStatus === 'incomplete' ? Fragment : B.Link,
          documentsStatus === 'incomplete' ? null : { href: documentsHref, onClick: documentsOnClick },
          <S.Row disabled={documentsStatus === 'incomplete'}>
            <S.Label>
              <S.LabelIcon>
                <B.Icon
                  name={documentsStatus === 'complete' ? 'check-2' : 'file'}
                  variant={
                    documentsStatus === 'invalid' ? 'error' : documentsStatus === 'complete' ? 'primary-1' : 'neutral-1'
                  }
                />
              </S.LabelIcon>

              <B.Text size="small">Documents</B.Text>
            </S.Label>

            {documentsStatus === 'complete' && (
              <S.Action>
                <B.Tag size="large" variant="success">
                  {COMPLETE_DOCUMENTS_LABEL[(index + 1) % COMPLETE_DOCUMENTS_LABEL.length]}
                </B.Tag>

                <S.ActionIcon>
                  <B.Icon name="arrow-right" variant="primary-1" />
                </S.ActionIcon>
              </S.Action>
            )}

            {!['complete', 'incomplete'].includes(documentsStatus) && (
              <S.Action>
                <S.ActionLabel>
                  <B.Text variant="accent-1">
                    <strong>Envoyer</strong>
                  </B.Text>
                </S.ActionLabel>

                <S.ActionIcon>
                  <B.Icon name="arrow-right" variant="accent-1" />
                </S.ActionIcon>
              </S.Action>
            )}
          </S.Row>
        )}

        {documentsStatus === 'invalid' && (
          <S.AlertError>
            <S.Content>
              <B.Text size="small" variant="error">
                <strong>Certains de vos documents sont invalides.</strong>
              </B.Text>
            </S.Content>
          </S.AlertError>
        )}
      </div>
    )}
  </S.Card>
)

ApplicationCard.defaultProps = {
  documentsStatus: 'idle',
  formStatus: 'idle',
  hasDocuments: true,
  index: 0,
  type: 'common'
}

ApplicationCard.propTypes = {
  description: PropTypes.string,
  documentsHref: PropTypes.string,
  documentsOnClick: PropTypes.func.isRequired,
  documentsStatus: PropTypes.oneOf(['idle', 'complete', 'incomplete', 'invalid']),
  formHref: PropTypes.string,
  formOnClick: PropTypes.func.isRequired,
  formStatus: PropTypes.oneOf(['idle', 'complete']),
  hasDocuments: PropTypes.bool,
  id: PropTypes.string,
  index: PropTypes.number,
  type: PropTypes.oneOf(['common', 'individual']),
  title: PropTypes.string.isRequired
}

export default memo(ApplicationCard)
