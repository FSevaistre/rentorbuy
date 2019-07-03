import React, { memo } from 'react'
import PropTypes from 'prop-types'
import * as B from '../../../index'

const TEXT = {
  article: 'dans le Guide de l’acheteur',
  news: 'sur le site de'
}
const share = ({ slug, title, type }) => () => {
  const link = encodeURI(window.location)
  const text = encodeURI(
    `J'ai trouvé cet article${title ? ` "${title}"` : ''} ${TEXT[type]} Pretto. Utile !${
      slug === 'twitter' ? ' 🏠' : ''
    }`
  )
  const whatsappText = `J'ai trouvé cet article sur pretto.fr, ça peut t'intéresser 😉 ${link}`
  const url = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${link}&quote=${text}`,
    twitter: `https://twitter.com/intent/tweet/?url=${link}&text=${text}&via=hellopretto`,
    whatsapp: `https://api.whatsapp.com/send?text=${whatsappText}`
  }
  window.open(url[slug], '_blank')
}

const SocialButton = props => {
  const { slug } = props
  return <B.Button icon={slug} format="squared-icon" size="medium" variant={slug} onClick={share(props)} />
}

SocialButton.propTypes = {
  slug: PropTypes.oneOf(['facebook', 'twitter', 'whatsapp']).isRequired,
  type: PropTypes.oneOf(['article', 'news']),
  title: PropTypes.string
}

SocialButton.defaultProps = {
  type: 'article'
}

export default memo(SocialButton)
