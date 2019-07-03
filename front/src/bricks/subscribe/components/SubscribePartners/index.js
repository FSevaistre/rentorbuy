import React, { PureComponent } from 'react'
import { BanksLogos, SubHeading } from '../../../index'
import './SubscribePartners.scss'

export default class SubscribePartners extends PureComponent {
  render() {
    return (
      <div className="subscribe-partners">
        <h4 className="subscribe-partners--title">
          <SubHeading size="large" variant="neutral-1-60">
            Nos partenaires
          </SubHeading>
        </h4>
        <div className="subscribe-partners--logos">
          <BanksLogos />
        </div>
      </div>
    )
  }
}
