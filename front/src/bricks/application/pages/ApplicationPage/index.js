import React from 'react'

import * as B from '../../../index'
import * as S from './styles'

const getHelpForPercentage = completionPercentage => {
  if (completionPercentage === 100) return 'En voilà, votre dossier est complet ! '
  if (completionPercentage >= 75) return "C'est la dernière ligne droite, encore un effort."
  if (completionPercentage >= 50) return 'Votre dossier est déjà complet à plus de 50 % !'
  if (completionPercentage >= 25) return 'Vous avez bien avancé ! Continuez comme ça.'

  return 'A vous de jouer !  Remplissez votre dossier de demande de prêt'
}

const getEmojiForPercentage = completionPercentage => {
  if (completionPercentage === 100) return ':sunglasses:'
  if (completionPercentage >= 75) return ':grinning:'
  if (completionPercentage >= 50) return ':smiley:'
  if (completionPercentage >= 25) return ':relieved:'

  return ':disappointed_relieved:'
}

const ApplicationPage = ({ cards, completionPercentage }) => (
  <S.Page>
    <S.Header>
      <S.Wrapper>
        <B.Desktop>
          <S.HeaderTitle>
            <B.Heading>Votre dossier</B.Heading>
          </S.HeaderTitle>
        </B.Desktop>

        <S.HeaderProgress>
          <B.Text>{getHelpForPercentage(completionPercentage)}</B.Text>

          <S.HeaderStatus>
            <B.Text>{completionPercentage} %</B.Text>

            <S.HeaderStatusEmoji>
              <B.Emoji size="medium">{getEmojiForPercentage(completionPercentage)}</B.Emoji>
            </S.HeaderStatusEmoji>
          </S.HeaderStatus>
        </S.HeaderProgress>

        <B.Progress format="rounded" max={100} value={completionPercentage} variant="accent-1" />
      </S.Wrapper>
    </S.Header>

    <S.Wrapper full>
      <S.Cards>
        {cards.map(({ cardType, ratio, ...cardProps }, index) => {
          if (cardType === 'notice') {
            return (
              <S.Card key={index} ratio={ratio}>
                <B.ApplicationNotice {...cardProps} />
              </S.Card>
            )
          }

          return (
            <S.Card key={index} ratio={ratio}>
              <B.ApplicationCard {...cardProps} />
            </S.Card>
          )
        })}
      </S.Cards>
    </S.Wrapper>
  </S.Page>
)

export default ApplicationPage
