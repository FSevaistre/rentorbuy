import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { BanksLogos, Card, Content, Icon, Stars, SubHeading, Swipe, Text, Mobile, Desktop } from '../../../../index'
import './ResultCardSwipe.scss'

export default class ResultCardSwipe extends PureComponent {
  static propTypes = {
    count: PropTypes.string,
    rate: PropTypes.string,
    onClick: PropTypes.func
  }
  render() {
    const { count, rate, onClick } = this.props
    const button = (
      <div className="result-card-swipe--button--container">
        <Content>
          <div className="result-card-swipe--button">
            <div className="result-card-swipe--button--text">
              <Text variant="primary-1">Prendre rendez-vous</Text>
            </div>
            <Icon variant="primary-1" name="arrow-right" />
          </div>
        </Content>
      </div>
    )
    const TrustpilotCard = {
      id: 'trustpilot_best',
      content: (
        <Content>
          <div className="result-card-swipe--trustpilot--rate">
            <div className="result-card-swipe--trustpilot--stars">
              <Stars number={5} />
            </div>
            <div className="result-card-swipe--trustpilot--count">
              <Text variant="neutral-1-40">
                {rate} • {count} avis sur Trustpilot
              </Text>
            </div>
          </div>
          <div className="result-card-swipe--trustpilot--comment">
            <SubHeading>
              «&nbsp;Le meilleur courtier avec lequel j’ai travaillé à ce jour sans aucun doute.&nbsp;»
            </SubHeading>
          </div>
        </Content>
      )
    }
    const TrustpilotCard2 = {
      id: 'trustpilot_free',
      content: (
        <Content>
          <div className="result-card-swipe--trustpilot--rate">
            <div className="result-card-swipe--trustpilot--stars">
              <Stars number={5} />
            </div>
            <div className="result-card-swipe--trustpilot--count">
              <Text variant="neutral-1-40">
                {rate} • {count} avis sur Trustpilot
              </Text>
            </div>
          </div>
          <div className="result-card-swipe--trustpilot--comment">
            <SubHeading>«&nbsp;Suivi excellent, toujours à l{"'"}écoute et de plus, gratuit&nbsp;!&nbsp;»</SubHeading>
          </div>
        </Content>
      )
    }
    const BankCard = {
      id: 'bank',
      content: (
        <Content>
          <div className="result-card-swipe--banks">
            <SubHeading>Comparez les offres négociées dans 80 banques partenaires</SubHeading>
            <div className="result-card-swipe--banks--logos">
              <BanksLogos oneLine />
            </div>
          </div>
        </Content>
      )
    }

    const cards = [BankCard, TrustpilotCard, TrustpilotCard2]
    return (
      <div className="result-card-swipe">
        <Mobile>
          <Swipe dotsProps={{ variant: 'accent-1' }}>
            {cards.map(card => {
              const { id, content } = card
              return (
                <Card key={id} variant="white" format="full">
                  <div className="result-card-swipe--content" onClick={() => onClick(id)}>
                    {content}
                    {button}
                  </div>
                </Card>
              )
            })}
          </Swipe>
        </Mobile>
        <Desktop>
          <Swipe dotsProps={{ variant: 'accent-1', position: 'right' }} enableMouseEvents format="full">
            {cards.map(card => {
              const { id, content } = card
              return (
                <Card key={id} format={['full']} variant="white">
                  <div className="result-card-swipe--content" onClick={() => onClick(id)}>
                    {content}
                    {button}
                  </div>
                </Card>
              )
            })}
          </Swipe>
        </Desktop>
      </div>
    )
  }
}
