import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Stars, SubHeading, Text } from '../../../index'
import './SubscribeContent.scss'

export default class SubscribeContent extends PureComponent {
  static propTypes = {
    count: PropTypes.string,
    rate: PropTypes.string,
    version: PropTypes.string
  }
  render() {
    const { count, rate, version } = this.props
    const PARAGRAPHS = [
      {
        title: 'Pretto est un courtier 100% gratuit',
        content: (
          <a
            href="https://fr.trustpilot.com/review/pretto.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="subscribe-content--section--rate"
          >
            <div className="subscribe-content--section--rate--stars">
              <Stars number={5} />
            </div>
            <div className="subscribe-content--section--rate--grade">
              <Text variant="success">
                <strong>{rate} Excellent</strong>
              </Text>
            </div>
            <div className="subscribe-content--section--rate--trustpilot">
              <Text size="small">
                {count} avis sur <span>Trustpilot</span>
              </Text>
            </div>
          </a>
        )
      },
      {
        title: 'Un expert vous accompagne',
        content:
          version === 'card'
            ? 'Simulez votre taux immobilier dans 80 banques et optimisez votre demande.'
            : 'Aidé de nos algorithmes, il vous conseille et optimise votre demande.'
      },
      {
        title: 'Gratuit et sans engagement',
        content: 'Ce sont les banques qui nous rémunèrent, en toute transparence.'
      }
    ]
    return (
      <div className="subscribe-content">
        {PARAGRAPHS.map((p, i) => {
          const { title, content } = p
          return (
            <div key={i} className="subscribe-content--section">
              <div className="subscribe-content--section--title">
                <SubHeading>{title}</SubHeading>
              </div>
              <div>{content}</div>
            </div>
          )
        })}
      </div>
    )
  }
}
