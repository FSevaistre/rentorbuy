import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const NumeralSteps = ({ items }) => (
  <S.Steps>
    {items.map(({ content, title }, index) => (
      <S.StepItem key={title} length={items.length}>
        <S.NumeralStep>
          <B.SubHeading size="large" variant="white">
            {index + 1}
          </B.SubHeading>
        </S.NumeralStep>

        <div>
          <S.StepTitle>
            <B.SubHeading size="large" variant="accent-1">
              {title}
            </B.SubHeading>
          </S.StepTitle>

          <B.Text dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </S.StepItem>
    ))}
  </S.Steps>
)

NumeralSteps.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default memo(NumeralSteps)
