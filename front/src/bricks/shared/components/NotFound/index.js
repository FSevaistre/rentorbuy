import React from 'react'
import { Mobile, Desktop } from '../../..'
import { Emoji } from '../../..'
import './NotFound.scss'

const NotFound = () => (
  <div className="not-found">
    <div className="not-found--title">
      <span className="not-found--title--number">4</span>
      <Mobile>
        <Emoji size="large">:o</Emoji>
      </Mobile>
      <Desktop>
        <Emoji size="x-large">:o</Emoji>
      </Desktop>
      <span className="not-found--title--number">4</span>
    </div>
    <div className="not-found--content">La page que vous cherchez semble introuvable.</div>
    <div className="not-found--links">
      <div className="not-found--links--title">Voici quelques liens utiles</div>
      <div className="not-found--links--list">
        <div className="not-found--links--list--item">
          <a href="https://faq.pretto.fr/" target="blank">
            FAQ
          </a>
        </div>
        <div className="not-found--links--list--item">
          <a href="https://app.pretto.fr/login">Espace client</a>
        </div>
        <div className="not-found--links--list--item">
          <a href="https://www.pretto.fr/contact" target="blank">
            Contact
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default NotFound
