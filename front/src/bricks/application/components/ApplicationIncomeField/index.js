import PropTypes from 'prop-types'
import React from 'react'

import * as B from '../../../index'
import * as S from './styles'

const periodOptions = [{ label: 'mensuel', value: 'monthly' }, { label: 'annuel', value: 'yearly' }]
const taxesOptions = [{ label: 'net', value: 'after' }, { label: 'brut', value: 'before' }]

const ApplicationIncomeField = ({ amountProps, periodProps, taxesProps }) => (
  <S.Fields>
    <S.FlexibleField>
      <B.NumberField {...amountProps} format="form" placeholder="1 800" updateWidth={false} />
    </S.FlexibleField>

    <S.FixedField>
      <B.SelectField {...taxesProps} options={taxesOptions} placeholder="net" format="form" />
    </S.FixedField>

    <S.FixedField>
      <B.SelectField {...periodProps} options={periodOptions} placeholder="mensuel" format="form" />
    </S.FixedField>
  </S.Fields>
)

ApplicationIncomeField.propTypes = {
  amountProps: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number
  }),
  periodProps: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
  }),
  taxesProps: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
  })
}

export default ApplicationIncomeField
