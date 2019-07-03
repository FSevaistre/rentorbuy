import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Emoji, Button, Card, Content, Desktop, Text } from '../../../index'
import './ErrorPage.scss'

export default class ErrorPage extends PureComponent {
  static propTypes = {
    isReloadable: PropTypes.bool,
    title: PropTypes.string.isRequired,
    reload: PropTypes.func
  }
  static defaultProps = {
    isReloadable: false
  }
  render() {
    const { isReloadable, title, reload } = this.props
    return (
      <div className="error-page">
        <div className="error-page--title">
          <Desktop>
            <div className="error-page--title--emoji">
              <Emoji size="large">:house_with_garden:</Emoji>
            </div>
          </Desktop>
          Nous sommes désolés
        </div>
        <div className="error-page--content">{title}</div>
        {isReloadable ? (
          <div className="error-page--reload">
            <Card variant="accent-1-l">
              <Content>
                <div className="error-page--reload--text">
                  Vous pouvez restaurer votre projet enregistré avec les paramètres que vous aviez définis. Votre projet
                  enregistré est finançable.
                </div>
                <div className="error-page--reload--button">
                  <Button variant="accent-1" onClick={reload}>
                    Restaurer
                  </Button>
                </div>
              </Content>
            </Card>
          </div>
        ) : (
          <div className="error-page--more-information">
            Si vous souhaitez plus d’informations :
            <div className="error-page--more-information--link">
              <Text
                type="a"
                variant="accent-1"
                href="https://faq.pretto.fr/comment-ca-marche/simuler-son-pret-immobilier/dans-quelles-situations-ne-pouvez-vous-pas-proposer-de-financement"
                target="blank"
              >
                Pourquoi ne pouvez-vous pas proposer de financement ?
              </Text>
            </div>
          </div>
        )}
      </div>
    )
  }
}
