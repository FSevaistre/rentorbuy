import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Emoji, Icon, Button, Card, Content, Desktop } from '../../../index'
import './OutpassedPage.scss'

export default class OutpassedPage extends PureComponent {
  static propTypes = {
    /** Whether or not the mandated has been signed */
    isMandateSigned: PropTypes.bool.isRequired,
    /** Event triggered when CTA is clicked */
    onDashboard: PropTypes.func.isRequired,
    /** Event triggered when chat is clicked */
    onChat: PropTypes.func.isRequired
  }

  render() {
    const { isMandateSigned, onChat, onDashboard } = this.props

    return (
      <div className="outpassed-page">
        <div className="outpassed-page--title">
          <Desktop>
            <div className="outpassed-page--title--emoji">
              <Emoji size="large">:nerd:</Emoji>
            </div>
          </Desktop>
          Votre projet est validé
        </div>

        <div className="outpassed-page--reload">
          <Card>
            <Content>
              <div className="outpassed-page--reload--text">
                {isMandateSigned
                  ? 'Vous pouvez suivre l’avancée de votre projet dans votre Espace client.'
                  : 'Il ne vous reste plus qu’à signer le mandat que vous avez reçu par email et suivre l’avancée de votre projet dans votre Espace client.'}
              </div>
              <div className="outpassed-page--reload--button">
                <Button variant="accent-1" onClick={onDashboard}>
                  Espace client
                </Button>
              </div>
            </Content>
          </Card>
        </div>

        <div className="outpassed-page--questions">
          <div className="outpassed-page--questions--icon">
            <Icon name="chat" variant="neutral-1-30" />
          </div>
          <div className="outpassed-page--questions--title">Vous avez des questions ?</div>
          <div className="outpassed-page--questions--chat" onClick={onChat}>
            Vous pouvez nous contacter par chat
          </div>
        </div>
      </div>
    )
  }
}
