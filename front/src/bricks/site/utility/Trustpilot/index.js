import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { PARAMS, TEMPLATES } from './config'

import { TrustpilotContext } from '../../../index'

export default class Trustpilot extends Component {
  static propTypes = {
    template: PropTypes.oneOf(Object.keys(TEMPLATES)),
    stars: PropTypes.string
  }

  static defaultProps = {
    template: 'carousel',
    stars: '4,5'
  }

  componentDidMount() {
    const trustbox = document.getElementById('trustbox')

    if (trustbox) {
      window.Trustpilot && window.Trustpilot.loadFromElement(trustbox)
    }
  }

  render() {
    const { template, stars } = this.props

    const props = {
      ...PARAMS,
      ...TEMPLATES[template],
      'data-stars': stars
    }

    return (
      <TrustpilotContext.Consumer>
        {({ logo, ratingValue, reviewCount, sameAs, url }) => {
          const schema = {
            '@context': 'http://schema.org',
            '@type': 'Organization',
            name: 'Pretto',
            url,
            sameAs,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: ratingValue.toString(),
              bestRating: '10',
              worstRating: '0',
              reviewCount: reviewCount.toString()
            },
            logo
          }

          return (
            <div className={`trustpilot trustpilot--${template}`}>
              <Helmet
                script={[
                  {
                    async: true,
                    defer: true,
                    key: 'trustpilot',
                    src: '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js',
                    type: 'text/javascript'
                  },
                  {
                    innerHTML: JSON.stringify(schema),
                    type: 'application/ld+json'
                  }
                ]}
              />

              <div {...props}>
                <a href="https://fr.trustpilot.com/review/pretto.fr" target="blank">
                  Trustpilot
                </a>
              </div>
            </div>
          )
        }}
      </TrustpilotContext.Consumer>
    )
  }
}
