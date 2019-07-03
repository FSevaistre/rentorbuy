import PropTypes from 'prop-types'
import React from 'react'

import { Button, Card, Content, Emoji, SubHeading, Text } from '../../../index'

import './CreditCapability.scss'

const CreditCapability = ({ onAdvisor, isFundable, onCompare }) => {
  if (!isFundable) {
    return (
      <Card variant="accent-1-l">
        <Content>
          <div className="credit-capability__description">
            <Text size="small" variant="neutral-1">
              Pour modifier votre projet, vous pouvez contacter votre conseiller.
            </Text>
          </div>

          <div className="credit-capability__link">
            <Text size="small">
              <span onClick={onAdvisor}>Contacter mon conseiller</span>
            </Text>
          </div>
        </Content>
      </Card>
    )
  }

  return (
    <Card variant="accent-1-l">
      <Content>
        <div className="credit-capability__header">
          <div className="credit-capability__emoji">
            <Emoji size="medium">:robot:</Emoji>
          </div>

          <div className="credit-capability__title">
            <SubHeading>Votre projet est finançable par Pretto</SubHeading>
          </div>
        </div>

        <div className="credit-capability__description">
          <Text size="small" variant="neutral-1">
            Utilisez le simulateur Pretto pour comparer les offres et les taux.
          </Text>
        </div>

        <div className="credit-capability__cta">
          <Button onClick={onCompare} variant="accent-1">
            Comparer les taux
          </Button>
        </div>
      </Content>
    </Card>
  )
}

CreditCapability.defaultProps = {
  onAdvisor: () => {},
  isFundable: true,
  onCompare: () => {}
}

CreditCapability.propTypes = {
  /** Event handler for when help from advisor is requested */
  onAdvisor: PropTypes.func.isRequired,
  /** Whether or not the project can be funded */
  isFundable: PropTypes.bool,
  /** Event handler for when compare button is clicked */
  onCompare: PropTypes.func
}

export default CreditCapability
