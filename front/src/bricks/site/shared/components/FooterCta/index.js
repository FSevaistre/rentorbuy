import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const FooterCta = () => (
  <S.Wrapper>
    <B.Wrapper full>
      <S.Content>
        <S.Headline>
          <B.Heading variant="white">
            Trouvez le meilleur prêt immobilier, en 5 minutes,
            <br />
            avec nos experts
          </B.Heading>
        </S.Headline>

        <S.Cta>
          {/* TODO: Add component in font */}
          <div className="cta-footer-icon" />

          <S.Button>
            <B.Button size="large" variant="white" href="https://app.pretto.fr">
              <S.ButtonText>Simuler mon prêt</S.ButtonText>
            </B.Button>
          </S.Button>
        </S.Cta>
      </S.Content>
    </B.Wrapper>
  </S.Wrapper>
)

export default memo(FooterCta)
