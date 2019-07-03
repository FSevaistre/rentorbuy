import React from 'react'
import { BanksLogos, Button, Card, Content, SubHeading } from '../../../../index'
import './ResultCardBanks.scss'

const ResultCardBanks = () => (
  <div className="simulator--result-card-banks">
    <Card format="line" variant="neutral-1-20">
      <Content format="center">
        <div className="simulator--result-card-banks--logos">
          <BanksLogos oneLine />
        </div>
        <div className="simulator--result-card-banks--title">
          <SubHeading>Découvrez la meilleure banque pour vous.</SubHeading>
        </div>
        <div className="simulator--result-card-banks--button">
          <Button label="parler à un expert" format="line" />
        </div>
      </Content>
    </Card>
  </div>
)

export default ResultCardBanks
