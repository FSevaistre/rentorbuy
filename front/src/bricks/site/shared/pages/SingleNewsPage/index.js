import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const SingleNewsPage = ({ title, content, image }) => {
  return (
    <S.Page>
      <B.ContentHero title={title} noShare />
      <S.Image>
        <B.Image slug={image} description={title} />
      </S.Image>

      <S.Content>
        <B.ContentBlock>{content}</B.ContentBlock>
        <S.Social>
          <B.Divider />
          <S.SocialButtons>
            <S.SocialButton>
              <B.SocialButton slug="facebook" type="news" />
            </S.SocialButton>

            <S.SocialButton>
              <B.SocialButton slug="twitter" type="news" />
            </S.SocialButton>

            <B.Mobile>
              <S.SocialButton>
                <B.SocialButton slug="whatsapp" type="news" />
              </S.SocialButton>
            </B.Mobile>
          </S.SocialButtons>
          <B.Divider />
        </S.Social>
        <B.Link href="/actualites/">
          <S.Link>
            <S.Icon>
              <B.Icon name="arrow-left" />
            </S.Icon>
            <B.Text>Retour aux actualités</B.Text>
          </S.Link>
        </B.Link>
      </S.Content>
    </S.Page>
  )
}

SingleNewsPage.propTypes = {
  /** Title of article. */
  title: PropTypes.string.isRequired,
  /** Content of page (as markdown). */
  content: PropTypes.string.isRequired,
  /** Image of page (cloudinary slug). */
  image: PropTypes.string.isRequired
}

export default memo(SingleNewsPage)
