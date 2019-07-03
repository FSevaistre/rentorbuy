import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const CookieBar = ({ legalSlug, onAccept }) => (
  <S.CookieBar>
    <S.CookieBarContent>
      <B.Text size="small" type="p">
        <S.Emoji>
          <B.Emoji size="x-small" verticalAlign="sub">
            :cookie:
          </B.Emoji>
        </S.Emoji>
        Pretto utilise les cookies pour améliorer votre expérience.
      </B.Text>

      <S.Links>
        <S.Link>
          <B.Text size="small">
            <B.Link href={legalSlug}>En savoir plus</B.Link>
          </B.Text>
        </S.Link>

        <S.Link>
          <B.Text size="small">
            <button onClick={onAccept}>Accepter</button>
          </B.Text>
        </S.Link>
      </S.Links>
    </S.CookieBarContent>
  </S.CookieBar>
)

CookieBar.propTypes = {
  /** Page slug where to redirect the user for more info. */
  legalSlug: PropTypes.string.isRequired,
  /** Function triggered when accept button is pressed. **/
  onAccept: PropTypes.func.isRequired
}

export default memo(CookieBar)
