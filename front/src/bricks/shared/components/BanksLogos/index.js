import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { shuffle } from 'lodash'
import './BanksLogos.scss'

const LOGOS = [
  { name: 'bred' },
  { name: 'lcl' },
  { name: 'societe_marseillaise_de_credit' },
  { name: 'societe_generale' },
  { name: 'axa_banque' },
  { name: 'credit_foncier' },
  { name: 'caisse_d_epargne' },
  { name: 'credit_agricole', isWhite: true },
  { name: 'credit_du_nord' },
  { name: 'bnp_paribas' }
]

export default class BanksLogos extends PureComponent {
  static propTypes = {
    oneLine: PropTypes.bool
  }

  render() {
    const { oneLine } = this.props
    const oneLineClass = oneLine ? ' banks-logos--one-line' : ''
    const logos = shuffle(LOGOS)
    return (
      <div className={`banks-logos${oneLineClass}`}>
        {logos.map(bank => {
          return (
            <img
              key={bank.name}
              className={`banks-logos--img${bank.isWhite ? ' banks-logos--img--white-bg' : ''}`}
              src={`https://res.cloudinary.com/pretto-fr/image/upload/c_scale,w_112,q_auto/banks/${bank.name}.png`}
              alt={`banque ${bank.name}`}
            />
          )
        })}
      </div>
    )
  }
}
