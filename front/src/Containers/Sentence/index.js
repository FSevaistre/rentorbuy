import React, { memo } from 'react'
import PropTypes from 'prop-types'
import * as B from '../../bricks'
import * as S from './styles.js'

const LOCATION = ({ zipcode, onChangeLocation }) => [
  'Vous habitez à ',
  {
    type: 'number',
    path: 'zipcode',
    props: {
      placeholder: '75000',
      onChange: onChangeLocation,
      value: zipcode
    }
  },
  '.'
]
const CONTRIBUTION = ({ contribution, onChangeContribution }) => [
  'Vous pouvez apporter ',
  {
    type: 'number',
    path: 'contribution',
    props: {
      placeholder: '10 000',
      onChange: onChangeContribution,
      value: contribution
    }
  },
  ' €.'
]
const INCOME = ({
  income,
  onChangeIncome,
  incomeKind,
  onChangeIncomeKind,
  period,
  onChangePeriod
}) => [
  'Vous touchez ',
  {
    type: 'number',
    path: 'income',
    props: {
      placeholder: '3 000',
      onChange: onChangeIncome,
      value: income
    }
  },
  ' € ',
  {
    type: 'select',
    path: 'incomeKind',
    props: {
      placeholder: 'net',
      onChange: onChangeIncomeKind,
      options: [
        { label: 'net', value: 'net' },
        { label: 'brut', value: 'brut' }
      ],
      value: incomeKind
    }
  },
  ' ',
  {
    type: 'select',
    path: 'period',
    props: {
      placeholder: 'par mois',
      onChange: onChangePeriod,
      options: [
        { label: 'par mois', value: 'monthly' },
        { label: 'par an', value: 'yearly' }
      ],
      value: period
    }
  },
  '.'
]
const Sentence = ({
  onSubmit,
  zipcode,
  onChangeLocation,
  income,
  onChangeIncome,
  incomeKind,
  onChangeIncomeKind,
  period,
  onChangePeriod,
  contribution,
  onChangeContribution,
  disabled
}) => (
  <S.Sentence>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    perferendis repellendus sint, delectus ullam quidem. Mollitia delectus
    doloribus ad omnis recusandae? Id vel libero temporibus facere. Hic quam
    voluptates quasi.
    <B.Sentence type="sentence">
      {LOCATION({ zipcode, onChangeLocation })}
    </B.Sentence>
    <B.Sentence type="sentence">
      {INCOME({
        income,
        onChangeIncome,
        incomeKind,
        onChangeIncomeKind,
        period,
        onChangePeriod
      })}
    </B.Sentence>
    <B.Sentence type="sentence">
      {CONTRIBUTION({
        contribution,
        onChangeContribution
      })}
    </B.Sentence>
    <B.Button onClick={onSubmit} disabled={disabled}>
      Valider
    </B.Button>
  </S.Sentence>
)
Sentence.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeLocation: PropTypes.func.isRequired,
  zipcode: PropTypes.any
}

export default memo(Sentence)
