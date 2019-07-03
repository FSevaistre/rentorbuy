import React from 'react'
import PropTypes from 'prop-types'
import { DefaultTemplate, ActionCards } from '../../../index'

const ReduceAmbition = ({ data }) => {
  return (
    <div className="reduce-ambition">
      <DefaultTemplate
        title="Ajustez votre demande"
        description="Nous vous conseillons d'ajuster les paramètres de votre projet pour réduire votre endettement."
      >
        <ActionCards data={data} hasOptions />
      </DefaultTemplate>
    </div>
  )
}

ReduceAmbition.propTypes = {
  data: PropTypes.array
}

export default ReduceAmbition
