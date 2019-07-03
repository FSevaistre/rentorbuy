import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const HomePress = ({ items }) => (
  <S.PressWrapper>
    <S.Press>
      {items.map(({ href, slug, title }) => (
        <S.PressLogo key={slug}>
          <B.Link href={href} target="_blank" rel="noopener noreferrer">
            <B.Image description={title} options="c_limit,h_40,dpr_2.0,q_auto" slug={`press/${slug}`} isImg />
          </B.Link>
        </S.PressLogo>
      ))}
    </S.Press>
  </S.PressWrapper>
)

HomePress.propTypes = {
  /** Press partners. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default memo(HomePress)
