import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Swipe, Content, Text, Card, Emoji, Mobile, Desktop } from '../../../index'
import './CapacitySwipe.scss'

const CARDS = (onSave, onTrackEbook, isRentalInvestment) => {
  return [
    isRentalInvestment && {
      slug: '0',
      emoji: ':house_with_garden:',
      description: 'Pretto calcule le loyer de votre investissement en estimant sa rentabilité brute à 3%'
    },
    {
      slug: '1',
      emoji: ':bulb:',
      description: (
        <p>
          Premier achat ? Téléchargez notre ebook gratuit : le{' '}
          <a
            href="https://extra.pretto.fr/guide-acheteur/"
            target="blank"
            className="capacity-swipe--content--description--link"
            onClick={onTrackEbook}
          >
            Guide de l’acheteur
          </a>
          .
        </p>
      )
    },
    {
      slug: '2',
      emoji: ':moneybag:',
      description: 'Augmentez votre apport pour réduire votre taux et augmenter votre budget.'
    },
    onSave && {
      slug: '3',
      emoji: ':telephone:',
      description: (
        <p>
          <span onClick={onSave} className="capacity-swipe--content--description--link">
            Prenez RDV
          </span>{' '}
          avec un expert Pretto pour confirmer votre budget.
        </p>
      )
    }
  ].filter(Boolean)
}

export default class CapacitySwipe extends PureComponent {
  static propTypes = {
    onSave: PropTypes.func,
    onTrackEbook: PropTypes.func,
    isRentalInvestment: PropTypes.bool
  }
  render() {
    const cards = CARDS(this.props.onSave, this.props.onTrackEbook, this.props.isRentalInvestment).map(card => {
      const { slug, description, emoji } = card
      return (
        <Card key={slug} variant="accent-1-l" format={['full', 'small-radius']}>
          <Content>
            <div className="capacity-swipe--content">
              <div className="capacity-swipe--content--emoji">
                <Emoji>{emoji}</Emoji>
              </div>
              <div className="capacity-swipe--content--description">
                <Text size="small">{description}</Text>
              </div>
            </div>
          </Content>
        </Card>
      )
    })
    return (
      <div className="capacity-swipe">
        <Mobile>
          <Swipe dotsVariant="accent-1" enableMouseEvents>
            {cards}
          </Swipe>
        </Mobile>
        <Desktop>
          <Swipe dotsVariant="accent-1" enableMouseEvents dotsProps={{ position: 'right' }} format="full">
            {cards}
          </Swipe>
        </Desktop>
      </div>
    )
  }
}
