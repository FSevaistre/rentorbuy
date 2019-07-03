import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, SubHeading, Tag, Text, Mobile } from '../../../index'
import './DocumentInformation.scss'

const TAG = {
  success: {
    variant: 'success',
    children: <Text size="small">Validés</Text>
  },
  pending: {
    variant: 'success-l',
    children: (
      <Text variant="success" size="small">
        Reçu, validation en cours
      </Text>
    )
  },
  error: { variant: 'error', children: 'Invalide' },
  requested: { variant: 'white', children: 'À envoyer' }
}

export default class DocumentInformation extends PureComponent {
  static propTypes = {
    /** Status of document, used for badge styling. */
    status: PropTypes.string,
    /** Descrition of document. */
    docDescription: PropTypes.element,
    /** Explanation of the document. */
    docExplanation: PropTypes.element,
    /** Name of mortgagor. */
    mortgagorName: PropTypes.string,
    /** Whether it is the comortgagor or not. */
    isComortgagor: PropTypes.bool,
    /** Error message when status is error. */
    errorMessage: PropTypes.string,
    /** Whether if morgtagor is alone or not. If hasMortgagor, description changes. */
    hasMortgagor: PropTypes.bool
  }
  static defaultProps = {
    status: 'requested',
    isComortgagor: false
  }
  render() {
    const {
      status,
      mortgagorName,
      docDescription,
      docExplanation,
      isComortgagor,
      errorMessage,
      hasMortgagor
    } = this.props
    const tagProps = TAG[status]
    return (
      <div className="document-information">
        <Mobile>
          {status === 'error' && (
            <div className="document-information--error">
              {errorMessage ? (
                <Card variant="error">
                  <Content size="small">
                    <Text variant="white">{errorMessage}</Text>
                  </Content>
                </Card>
              ) : (
                <Tag {...tagProps} />
              )}
            </div>
          )}
        </Mobile>
        <Content>
          <div className="document-information--accepted">
            <div className="document-information--title">
              <SubHeading variant="neutral-1-40">Documents à envoyer</SubHeading>
            </div>
            <div className="document-information--text">{docDescription}</div>
          </div>

          {docExplanation && (
            <div className="document-information--explanation">
              <div className="document-information--title">
                <SubHeading variant="neutral-1-40">Pourquoi ?</SubHeading>
              </div>
              <div className="document-information--text">{docExplanation}</div>
            </div>
          )}

          {hasMortgagor && (
            <div className="document-information--who">
              <div className="document-information--title">
                <SubHeading variant="neutral-1-40">Pour qui ?</SubHeading>
              </div>
              <div className="document-information--text">
                {isComortgagor
                  ? mortgagorName
                    ? `${mortgagorName}, votre co-emprunteur`
                    : 'Votre co-emprunteur'
                  : 'Pour vous'}
              </div>
            </div>
          )}
          {(status === 'success' || status === 'pending') && (
            <div>
              <div className="document-information--tag">
                <Tag {...tagProps} />
              </div>
              <div className="document-information--status">
                {status === 'success' &&
                  "Notre équipe a validé vos documents. Vous pouvez tout de même en envoyer d'autres si nécessaire."}
                {status === 'pending' && 'Notre équipe a reçu vos documents, elle est en train de les valider.'}
              </div>
            </div>
          )}
        </Content>
      </div>
    )
  }
}
