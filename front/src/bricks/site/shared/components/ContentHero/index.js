import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const ContentHero = ({ image, title, noShare, hasSubMenu }) => (
  <S.Hero hasImage={image} noShare={noShare} hasSubMenu={hasSubMenu}>
    <S.Inner>
      <B.Container full>
        <S.Title hasImage={image} align={noShare ? 'center' : 'left'}>
          <B.Heading size="large" type="h1">
            {title}
          </B.Heading>
        </S.Title>

        {image && (
          <div>
            <B.Image slug={image} options="c_fill,w_1600,h_900,q_auto" />
          </div>
        )}

        {!noShare && (
          <S.Socials hasImage={image}>
            <S.Social>
              <B.SocialButton slug="facebook" />
            </S.Social>

            <S.Social>
              <B.SocialButton slug="twitter" />
            </S.Social>

            <B.Mobile>
              <S.Social>
                <B.SocialButton slug="whatsapp" />
              </S.Social>
            </B.Mobile>
          </S.Socials>
        )}
      </B.Container>
    </S.Inner>
  </S.Hero>
)

ContentHero.propTypes = {
  /** Slug of the hero image. */
  image: PropTypes.string,
  /** Title of the content. */
  title: PropTypes.string.isRequired,
  /** Whether social sharing should be visible or not. Title is centered when noShare is `true` */
  noShare: PropTypes.bool,
  /** Whether there is a submenu on top of the page or not. If true, padding top is added to keep spacings. */
  hasSubMenu: PropTypes.bool
}

ContentHero.defaultProps = {
  noShare: false
}

export default memo(ContentHero)
