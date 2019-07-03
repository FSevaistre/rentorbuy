import PropTypes from 'prop-types'
import React, { Fragment, memo } from 'react'

import * as B from '../../../index'
import * as S from './styles'

const ApplicationDocumentList = ({ documents, group }) => (
  <S.List>
    {!!group && (
      <S.Header>
        <S.HeaderIcon>
          <B.Icon name="folder-lines" />
        </S.HeaderIcon>

        <B.Text>
          <strong>{group}</strong>
        </B.Text>
      </S.Header>
    )}

    {documents.map(({ href, mortgagor, status, title }, index) => (
      <Fragment key={index}>
        {(index !== 0 || (index === 0 && !!group)) && <B.Divider variant="neutral-1-20" />}

        <B.Link href={href}>
          <S.Row>
            <S.RowStatus>
              {status === 'idle' && <B.Badge format="line" variant="neutral-1-20" />}
              {status === 'invalid' && <B.Badge icon="exclamation-mark" variant="error" />}
              {status === 'sent' && <B.Badge icon="check" variant="success" />}
            </S.RowStatus>

            <S.RowLabel>
              <div>
                <div>
                  <B.Text>{title}</B.Text>
                </div>

                <div>
                  <B.Text variant="neutral-1-60">{mortgagor}</B.Text>
                </div>
              </div>

              {status !== 'idle' && (
                <S.RowTag>
                  {status === 'invalid' && (
                    <B.Tag size="small" variant="error">
                      Invalide
                    </B.Tag>
                  )}

                  {status === 'sent' && (
                    <B.Tag size="small" variant="success">
                      Envoyé
                    </B.Tag>
                  )}
                </S.RowTag>
              )}
            </S.RowLabel>

            <S.RowAction>
              <B.Icon name="chevron-right" variant="neutral-1-40" />
            </S.RowAction>
          </S.Row>
        </B.Link>
      </Fragment>
    ))}
  </S.List>
)

ApplicationDocumentList.propTypes = {
  documents: PropTypes.array.isRequired,
  group: PropTypes.string
}

export default memo(ApplicationDocumentList)
