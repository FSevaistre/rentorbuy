import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BubbleChat, Button, Card, Checkbox, Content, Summary, SubHeading } from '../../../index'
import './ConfirmPage.scss'

export default class ConfirmPage extends Component {
  static propTypes = {
    /** Email of the advisor for emailing purposes. */
    advisorEmail: PropTypes.string.isRequired,
    /** Avatar source for bubble chat. */
    avatarProps: PropTypes.object.isRequired,
    goodUsage: PropTypes.oneOf(['primary_residence', 'rental_investment', 'secondary_residence']).isRequired,
    projectKind: PropTypes.oneOf(['purchase', 'renegotiation']).isRequired,
    /** Values shown under the first summary component. */
    projectValues: PropTypes.array,
    /** Values shown under the second summary component. */
    loanValues: PropTypes.array,
    /** Event handler when confirming the project. */
    onConfirm: PropTypes.func.isRequired,
    /** Event handler when user chooses to select an appointment. */
    onAppointment: PropTypes.func.isRequired
  }

  static defaultProps = {
    loanValues: [],
    projectValues: []
  }

  state = {
    isChecked: false
  }

  handleCheck = () => this.setState(({ isChecked }) => ({ isChecked: !isChecked }))

  render() {
    const {
      advisorEmail,
      avatarProps,
      goodUsage,
      projectKind,
      projectValues,
      loanValues,
      onConfirm,
      onAppointment
    } = this.props
    const { isChecked } = this.state

    return (
      <div className="confirm-page">
        <div className="confirm-page__container">
          <div className="confirm-page__header">
            <div className="confirm-page__message">
              <BubbleChat avatarProps={avatarProps}>
                Pretto va solliciter un financement immobilier dont voici les caractéristiques indicatives. Je
                négocierai pour vous les meilleures conditions en mettant les banques en concurrence !
              </BubbleChat>
            </div>

            <div className="confirm-page__message">
              <BubbleChat hideAvatar>
                {"Avant de commencer j'ai besoin de confirmer les informations de votre projet."}
              </BubbleChat>
            </div>
          </div>

          <div className="confirm-page__wrapper">
            <div className="confirm-page__detail">
              <Summary title={projectKind === 'purchase' ? 'Votre projet' : 'Votre rachat'} values={projectValues} />
            </div>

            <div className="confirm-page__detail">
              <Summary title={projectKind === 'purchase' ? 'Votre prêt' : 'Votre nouveau prêt'} values={loanValues} />
            </div>

            {goodUsage !== 'rental_investment' && (
              <div className="confirm-page__detail">
                <Card format="line" variant="neutral-1-20">
                  <Content>
                    <div className="confirm-page__detail__title">
                      <SubHeading size="large">Conditions</SubHeading>
                    </div>

                    <div>
                      Vous devrez domicilier vos revenus dans la banque qui vous accordera le financement pour votre
                      projet.
                    </div>
                  </Content>
                </Card>
              </div>
            )}

            <div className="confirm-page__disclaimer">
              <Card variant="accent-1-l">
                <Content>
                  <div className="confirm-page__disclaimer__content">
                    Si certaines de ces informations ne vous semblent pas conformes, je vous invite à m'en avertir{' '}
                    <a href={`mailto:${advisorEmail}`} target="_blank" rel="noopener noreferrer">
                      par email
                    </a>{' '}
                    ou en{' '}
                    <a href="/appointment" onClick={onAppointment}>
                      prenant rendez-vous avec moi
                    </a>
                    .
                  </div>
                </Content>
              </Card>
            </div>

            <div className="confirm-page__disclaimer">
              <Card variant="accent-1-l">
                <Content>
                  <div className="confirm-page__disclaimer__content">
                    {
                      "Si tout vous semble correct, il ne vous reste plus qu'à confirmer votre projet et à signer électroniquement le mandat de recherche de financement que vous aller recevoir par email. Ensuite, c'est à nous de jouer 😊"
                    }
                  </div>
                </Content>
              </Card>
            </div>

            <div className="confirm-page__check">
              <Checkbox
                id="confirm"
                onChange={this.handleCheck}
                checked={isChecked}
                label="Je certifie que ces informations sont correctes et je comprends qu'elles reflètent le financement que Pretto va négocier auprès des banques."
                variant="primary-1"
              />
            </div>

            <Button onClick={onConfirm} disabled={!isChecked}>
              Confirmer mon projet
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
