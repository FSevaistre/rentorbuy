import PropTypes from 'prop-types'
import React, { memo, Fragment } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const ContactHeader = ({ onShowIntercom }) => (
  <Fragment>
    <B.Wrapper full>
      <header>
        <B.ContentHero title="Contactez l’équipe Pretto" noShare />
      </header>
    </B.Wrapper>

    <B.Wrapper>
      <S.Content>
        <S.Aside>
          <B.Image slug="website/page/contact/contact-image" options="q_auto" description="Contact" isImg />
        </S.Aside>
        <S.Information>
          <p>
            Vous pouvez nous contacter : <br />
            Du lundi au jeudi de 9h à 19h ; <br />
            Le vendredi de 9h à 18h ; <br />
            Le samedi de 10h à 18h.
          </p>
          <B.SubHeading size="large" type="h3">
            <S.Title>
              <B.Icon name="chat" />
              Par chat
            </S.Title>
          </B.SubHeading>
          <S.Intercom onClick={onShowIntercom}>Écrivez nous, nous vous répondons en quelques minutes</S.Intercom>
          <B.SubHeading size="large">
            <a href="tel:0176390641" rel="nofollow">
              <S.Title>
                <B.Icon name="phone" />
                01 76 39 06 41
              </S.Title>
            </a>
          </B.SubHeading>
        </S.Information>
      </S.Content>
    </B.Wrapper>
  </Fragment>
)

ContactHeader.propTypes = {
  onShowIntercom: PropTypes.func
}

export default memo(ContactHeader)
