import React from 'react'
import PropTypes from 'prop-types'
import { DefaultTemplate, ActionCards, Content, Icon, Text, Desktop } from '../../../index'

const Optimize = ({ data, onGoBack }) => {
  return (
    <div className="optimize">
      <DefaultTemplate
        title="Optimisez votre prêt"
        description="Choisissez une de nos trois propositions pour optimiser votre demande."
      >
        <ActionCards data={data} />
        <Desktop>
          <Content>
            <div className="optimize--back" onClick={onGoBack}>
              <div className="optimize--back--icon">
                <Icon name="arrow-left" />
              </div>
              <Text size="small">Retour à votre simulation</Text>
            </div>
          </Content>
        </Desktop>
      </DefaultTemplate>
    </div>
  )
}

Optimize.propTypes = {
  data: PropTypes.array,
  onGoBack: PropTypes.func
}

export default Optimize
