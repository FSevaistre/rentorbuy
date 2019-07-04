import React, { memo, Fragment } from 'react'
import PropTypes from 'prop-types'
import * as B from '../../bricks'
import * as S from './styles'
const Input = ({ label, suffix, ...props }) => (
  <S.Input>
    <B.Row
      label={label}
      value={
        props.onChange ? (
          <S.Field>
            <B.NumberField {...props} /> {suffix}
          </S.Field>
        ) : (
          <B.SubHeading>
            {props.value.toLocaleString('fr')} {suffix}
          </B.SubHeading>
        )
      }
    />
  </S.Input>
)

Input.propTypes = {
  label: PropTypes.string,
  suffix: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any
}

export default memo(Input)
