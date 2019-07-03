import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Card, Content, Emoji, Mobile, Desktop } from '../../../index'
import './ServerErrorPage.scss'

export default class ServerErrorPage extends Component {
  static propTypes = {
    hash: PropTypes.string,
    onCall: PropTypes.func,
    onChat: PropTypes.func
  }
  static defaultProps = { hash: '' }
  render() {
    const { hash, onCall, onChat } = this.props
    return (
      <div className="server-error-page">
        <div className="server-error-page--title">
          <div className="server-error-page--title--emoji">
            <Desktop>
              <Emoji size="large">:o</Emoji>
            </Desktop>
            <Mobile>
              <Emoji size="medium">:o</Emoji>
            </Mobile>
          </div>
          <h1>Oh, mince !</h1>
        </div>
        <div className="server-error-page--content">
          <p>Quelque chose ne s’est pas passé comme prévu. Notre équipe va résoudre le problème dès que possible.</p>
          <p>
            Vous pouvez essayer de{' '}
            <span className="server-error-page--link">
              <a href="/">revenir à la page d’accueil</a>
            </span>
            .
          </p>
          <p>Sinon, nous serions très heureux d{"'"}échanger avec vous :</p>
          <div className="server-error-page--content--contact">
            <div className="server-error-page--content--contact--type">
              <h3 className="server-error-page--content--contact--type--title">
                <span className="server-error-page--content--contact--type--title--icon">
                  <Icon name="phone" />
                </span>
                <span>Par téléphone</span>
              </h3>
              <span className="server-error-page--content--contact--type--link">
                <span onClick={onCall}>01 76 39 06 41</span>
              </span>
            </div>
            <div className="server-error-page--content--contact--type">
              <h3 className="server-error-page--content--contact--type--title">
                <span className="server-error-page--content--contact--type--title--icon">
                  <Icon name="mail" />
                </span>
                <span>Par mail</span>
              </h3>
              <span className="server-error-page--content--contact--type--link">
                <a href="mailto:hello@pretto.fr" target="blank">
                  hello@pretto.fr
                </a>
              </span>
            </div>
            <div className="server-error-page--content--contact--type">
              <h3 className="server-error-page--content--contact--type--title">
                <span className="server-error-page--content--contact--type--title--icon">
                  <Icon name="chat" />
                </span>
                <span>Par chat</span>
              </h3>
              <span className="server-error-page--content--contact--type--link" onClick={onChat}>
                Discuter avec nous
              </span>
            </div>
          </div>
        </div>
        {hash !== '' && (
          <div className="server-error-page--help">
            <Card zDepth={1} variant="white">
              <Content>
                <p>Le code ci-dessous peut nous aider à résoudre le mystère</p>
                <span className="hash">{hash}</span>
              </Content>
            </Card>
          </div>
        )}
      </div>
    )
  }
}
