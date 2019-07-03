import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, SubHeading, Swipe, Mobile, Desktop } from '../../../index'
import './DashboardSwipe.scss'

const BASE_URL = 'https://www.pretto.fr'
const ARTICLES = {
  'etapes-achat-immobilier': {
    title: "Les 7 étapes d'un achat immobilier",
    path: '/achat-immobilier/etapes-achat-immobilier/',
    version: 'v1540391607'
  },
  'banques-ou-courtiers': {
    title: 'Prêt immobilier : pourquoi les banques travaillent avec les courtiers ? - Que choisir ?',
    path: '/courtier-immobilier/banques-ou-courtiers/',
    version: 'v1540391607'
  },
  'meilleurs-courtiers-gratuits': {
    title: 'Pourquoi les meilleurs courtiers immobiliers sont gratuits ?',
    path: '/courtier-immobilier/meilleurs-courtiers-gratuits/',
    version: 'v1540391607'
  }
}

export default class DashboardSwipe extends PureComponent {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.oneOf(Object.keys(ARTICLES))
      })
    ),
    cardProps: PropTypes.object
  }
  render() {
    const { articles, cardProps } = this.props
    const swipeProps = { dotsProps: { position: 'center', variant: 'accent-1' } }
    const content = articles.map(({ slug }) => {
      const { title, path, version } = ARTICLES[slug]
      return (
        <div key={slug} className="dashboard-swipe--article">
          <Card variant="white" format="full" {...cardProps}>
            <img
              src={`https://res.cloudinary.com/pretto-fr/image/upload/c_fill,h_240,w_600,q_auto/${version}/pretto-ui/articles/${slug}.png`}
              alt={slug}
            />
            <Content>
              <a href={`${BASE_URL}${path}`} target="blank">
                <SubHeading>{title}</SubHeading>
              </a>
            </Content>
          </Card>
        </div>
      )
    })
    return (
      <div className="dashboard-swipe">
        <Mobile>
          <Swipe {...swipeProps}>{content}</Swipe>
        </Mobile>
        <Desktop>
          <Swipe {...swipeProps} format="full" enableMouseEvents>
            {content}
          </Swipe>
        </Desktop>
      </div>
    )
  }
}
