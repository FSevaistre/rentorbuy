import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Desktop, DocsList, BubbleChat, Text } from '../../../index'
import './DocumentsPage.scss'

const attestation =
  'L’attestation Pretto vous permettra de prouver aux vendeurs et aux agents immobiliers que votre projet est solide et que vous avez anticipé son financement.'
const completeDocs = 'Complétez votre dossier en envoyant vos documents.'
const validation = (
  <Desktop>
    Je validerai la conformité des documents et vous pouvez suivre en temps réel l’état de chaque document{'\u00a0'}: À
    envoyer, En attente, Validé ou invalide.
  </Desktop>
)
const capacity =
  'Afin de vous accorder cette attestation, Pretto doit vérifier certains de vos documents pour attester de votre capacité d’emprunt.'

const followUp = 'À vous de jouer !'
export default class DocumentsPage extends PureComponent {
  static propTypes = {
    isEarly: PropTypes.bool,
    withMessage: PropTypes.bool,
    docsListProps: PropTypes.object,
    bubbleChatProps: PropTypes.object
  }
  render() {
    const { bubbleChatProps, docsListProps, isEarly, withMessage } = this.props
    const error = !!docsListProps.documents.find(doc => doc.filter === 'error')
    return (
      <div className="documents-page">
        <div className="documents-page--bubble-chat">
          {withMessage && (
            <div>
              <div className="documents-page--bubble-chat__bubble">
                <BubbleChat {...bubbleChatProps}>
                  <Text>
                    {isEarly ? (
                      attestation
                    ) : (
                      <Fragment>
                        {completeDocs}
                        {validation}
                      </Fragment>
                    )}
                  </Text>
                </BubbleChat>
              </div>

              {isEarly && (
                <div className="documents-page--bubble-chat__bubble">
                  <BubbleChat hideAvatar>
                    {capacity}
                    {validation}
                    {followUp}
                  </BubbleChat>
                </div>
              )}

              <div className="documents-page--bubble-chat__bubble">
                <BubbleChat hideAvatar>
                  Besoin d’aide ? N’hésitez pas à consulter{' '}
                  <a
                    href="https://faq.pretto.fr/comment-constituer-mon-dossier"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    notre FAQ
                  </a>
                  .
                </BubbleChat>
              </div>
            </div>
          )}
        </div>
        {error && (
          <div className="documents-page--bubble-chat">
            <BubbleChat {...bubbleChatProps} cardProps={{ variant: 'error-l' }} hideAvatar>
              <Text variant="error">
                Certains documents de votre dossier ne sont pas valides. Vous pouvez les vérifier directement sur la
                page de chaque document et nous renvoyer la bonne version.
              </Text>
            </BubbleChat>
          </div>
        )}
        <div className="documents-page--docs-list">
          <DocsList {...docsListProps} />
        </div>
      </div>
    )
  }
}
