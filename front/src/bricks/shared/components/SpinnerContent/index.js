import React from 'react'
import PropTypes from 'prop-types'
import { Emoji, Heading } from '../../../index'
import './SpinnerContent.scss'

const CONTENT = {
  simulation: {
    emoji: ':robot:',
    title: 'Un instant...',
    content: 'Nous comparons les banques.'
  },
  capacity: {
    emoji: ':robot:',
    title: 'Un instant...',
    content: 'Nous calculons votre budget.'
  },
  confirmProject: {
    emoji: ':smiley:',
    title: 'Super !',
    content: 'Un instant, nous validons votre projet.'
  },
  subscribe: {
    emoji: ':sunglasses:',
    title: "Hop ! C'est envoyé",
    content: (
      <div>
        Nous créons votre dossier <br />
        et votre espace sécurisé Pretto.
      </div>
    )
  }
}
const SpinnerContent = ({ slug }) => {
  const { emoji, title, content } = CONTENT[slug]
  return (
    <div className="spinner-content">
      <div className="spinner-content--title">
        <div className="spinner-content--title--emoji">
          <Emoji size="medium">{emoji}</Emoji>
        </div>
        <Heading>{title}</Heading>
      </div>
      <div className="spinner-content--content">{content}</div>
    </div>
  )
}
SpinnerContent.propTypes = {
  /** Slug of content. Defines its <code>title</code>, <code>emoji</code> and <code>content</code>. */
  slug: PropTypes.oneOf(Object.keys(CONTENT)).isRequired
}
export default SpinnerContent
