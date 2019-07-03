import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const ContactQuestions = () => (
  <S.Section>
    <B.Wrapper>
      <S.Title>
        <B.Heading size="medium" type="h2" variant="primary-1">
          Vous avez une question&nbsp;?
        </B.Heading>
      </S.Title>

      <S.Content>
        <S.CardContainer>
          <B.Card variant="white" zDepth={2} format="full-height">
            <S.Card>
              <B.Content>
                <S.CardTitle>
                  <B.SubHeading type="h3">Comment ça marche&nbsp;?</B.SubHeading>
                </S.CardTitle>
                <S.CardContent>Découvrez le fonctionnement de Pretto.</S.CardContent>
                <S.Button>
                  <B.Button href="/en-savoir-plus/" format="full">
                    Découvrir
                  </B.Button>
                </S.Button>
              </B.Content>
            </S.Card>
          </B.Card>
        </S.CardContainer>
        <S.CardContainer>
          <B.Card variant="white" zDepth={2} format="full-height">
            <S.Card>
              <B.Content>
                <S.CardTitle>
                  <B.SubHeading type="h3">Notre FAQ</B.SubHeading>
                </S.CardTitle>
                <S.CardContent>
                  Toutes les réponses aux questions que vous vous posez sur Pretto et votre prêt.
                </S.CardContent>
                <S.Button>
                  <B.Button href="https://faq.pretto.fr/" variant="accent-1" format="full">
                    Consulter
                  </B.Button>
                </S.Button>
              </B.Content>
            </S.Card>
          </B.Card>
        </S.CardContainer>
      </S.Content>
    </B.Wrapper>
  </S.Section>
)

export default memo(ContactQuestions)
