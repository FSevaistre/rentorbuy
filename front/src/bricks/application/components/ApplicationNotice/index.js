import PropTypes from 'prop-types'
import React from 'react'

import * as B from '../../../index'
import * as S from './styles'

const themes = {
  default: {
    backgroundColor: 'accent-1-l',
    headlineColor: 'accent-1',
    textColor: 'inherit'
  },
  error: {
    backgroundColor: 'error-l',
    headlineColor: 'error',
    textColor: 'error'
  }
}

const ApplicationNotice = ({ cta, href, notice, onClick, title, type }) => (
  <B.Card variant={themes[type].backgroundColor}>
    <B.Content>
      <S.Title>
        <B.SubHeading variant={themes[type].headlineColor}>{title}</B.SubHeading>
      </S.Title>

      <S.Notice>
        <B.Text variant={themes[type].textColor}>{notice}</B.Text>
      </S.Notice>

      <div>
        <B.ButtonSquared href={href} onClick={onClick} variant={themes[type].headlineColor}>
          {cta}
        </B.ButtonSquared>
      </div>
    </B.Content>
  </B.Card>
)

ApplicationNotice.defaultProps = {
  onClick: () => {},
  type: 'default'
}

ApplicationNotice.propTypes = {
  cta: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  notice: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'error'])
}

export default ApplicationNotice
