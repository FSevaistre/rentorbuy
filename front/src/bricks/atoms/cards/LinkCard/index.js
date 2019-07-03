import React, { memo } from 'react'
import PropTypes from 'prop-types'
import * as B from '../../../index'
import * as S from './styles'

const LinkCard = ({ emoji, title, content, href, cta, variant }) => (
  <B.Card format="full-height">
    <B.Content format="full-height">
      <S.Content>
        <S.Title>
          <S.Emoji>
            <B.Emoji size="medium">{emoji}</B.Emoji>
          </S.Emoji>
          <B.SubHeading size="large">{title}</B.SubHeading>
        </S.Title>
        <B.Text size="small" type="p">
          {content}
        </B.Text>
        <S.Button>
          <B.Button href={href} variant={variant} size="large">
            {cta}
          </B.Button>
        </S.Button>
      </S.Content>
    </B.Content>
  </B.Card>
)

LinkCard.propTypes = {
  emoji: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  variant: PropTypes.string
}

LinkCard.defaultProps = {
  variant: 'primary-1'
}

export default memo(LinkCard)
