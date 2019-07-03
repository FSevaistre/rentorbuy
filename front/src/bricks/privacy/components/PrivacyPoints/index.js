import React, { PureComponent } from 'react'
import { Emoji, Heading, Icon } from '../../../index'
import './PrivacyPoints.scss'

const POINTS = [
  'Nous ne transmettons aucune information aux banques sans votre accord.',
  'Nous ne vendons et ne transmettons vos informations à aucun partenaire commercial sans votre accord.',
  'Vous pouvez accéder à vos données et demander leur suppression à tout moment.'
]
export default class PrivacyPoints extends PureComponent {
  render() {
    return (
      <div className="privacy-header">
        <div className="privacy-header--title">
          <div className="privacy-header--title--emoji">
            <Emoji size="medium">:lock:</Emoji>
          </div>
          <Heading>Vos données personnelles</Heading>
        </div>
        <div>Chez Pretto, nous sommes soucieux de la protection de vos données personnelles.</div>
        <div className="privacy-header--points">
          {POINTS.map((point, i) => {
            return (
              <div key={i} className="privacy-header--points--elem">
                <div className="privacy-header--points--elem--check">
                  <Icon name="check-2" variant="white" />
                </div>
                <div className="privacy-header--points--elem--content">{point}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
