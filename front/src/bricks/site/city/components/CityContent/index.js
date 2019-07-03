import React, { memo } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const CityContent = ({ slug, name }) => {
  return (
    <B.Container>
      <S.Block>
        <B.RandomValue slug={slug} values={['Quand vous achetez un', 'Lors de l’achat d’un']} /> bien immobilier à{' '}
        {name}, la question du <B.RandomValue slug={slug} values={['crédit immobilier', 'prêt immobilier']} /> est{' '}
        <B.RandomValue slug={slug} values={['centrale', 'primordiale', 'très importante']} />. Pour trouver de bonnes
        conditions de <B.RandomValue slug={slug} values={['financement', 'prêt', 'crédit']} />, vous avez plusieurs{' '}
        <B.RandomValue slug={slug} values={['solutions', 'possibilités']} />.
      </S.Block>
      <S.Title>
        <B.SubHeading type="h3">
          <B.RandomValue slug={slug} values={['Aller voir', 'Consulter']} /> les banques et{' '}
          <B.RandomValue slug={slug} values={['comparer les offres', 'faire jouer la concurrence']} />
        </B.SubHeading>
      </S.Title>
      <S.Block>
        Vous pouvez <B.RandomValue slug={slug} values={['aller voir', 'consulter']} /> directement les banques. Prenez
        rendez-vous avec les agences bancaire à {name}.{' '}
        <B.RandomValue slug={slug} values={['Soyez vigilant', 'Attention', 'Faites attention']} />, les premières
        propositions faites par les banques ne seront probablement pas très{' '}
        <B.RandomValue slug={slug} values={['intéressantes', 'concurrentielles']} />. En effet, les banques attendent
        que vous les mettiez en concurrence pour vous proposer leur meilleur taux.
      </S.Block>
      <S.Title>
        <B.SubHeading type="h3">
          <B.RandomValue slug={slug} values={["Optez pour les services d'un", 'Faites vous aider par un']} /> courtier
          immobilier
        </B.SubHeading>
      </S.Title>
      <S.Block>
        <B.RandomValue slug={slug} values={['Par ailleurs', 'Autre solution', 'Pour gagner du temps']} />, vous pouvez{' '}
        <B.RandomValue slug={slug} values={['passer par', 'faire appel à']} /> un courtier immobilier. Le{' '}
        <B.RandomValue slug={slug} values={['rôle', 'métier']} /> des{' '}
        <B.RandomValue
          slug={slug}
          values={['courtiers en crédit immobilier', 'courtier immobilier', 'courtier en prêt immobilier']}
        />{' '}
        est de vous aider dans votre recherche de{' '}
        <B.RandomValue slug={slug} values={['financement', 'prêt', 'crédit']} />. Il arrive que le niveau de qualité de
        service <B.RandomValue slug={slug} values={['diffère', 'varie']} /> d’un courtier immobilier à l’autre,
        notamment en fonction des différents type de courtage. En effet,{' '}
        <B.RandomValue slug={slug} values={['il y a', 'il existe']} /> plusieurs types de courtage, et les prix et les
        services ne sont pas les mêmes.
      </S.Block>
      <S.Block>
        <B.RandomValue slug={slug} values={["Tout d'abord", "D'un côté"]} />, il y a les courtiers immobiliers avec{' '}
        <B.RandomValue slug={slug} values={['des agences physiques', 'pignon sur rue']} />
        . Vous <B.RandomValue slug={slug} values={['devez prendre', 'prendrez']} /> un rendez-vous avec eux. Les
        courtiers <B.RandomValue slug={slug} values={['immobiliers', 'en crédit immobilier', 'en prêt immobilier']} />{' '}
        physiques vous accompagnent de la <B.RandomValue slug={slug} values={['comparaison', 'négociation']} /> des taux
        immobiliers jusqu’à la signature.
        <B.RandomValue slug={slug} values={['Toutefois', 'Cependant']} />, le niveau de service de ces courtiers dépend
        de la qualité de votre interlocuteur. Enfin, les courtiers immobiliers en agence prennent souvent des{' '}
        <B.RandomValue slug={slug} values={['frais', 'honoraires de courtage']} /> qui varient entre 500 et 2000 euros.
      </S.Block>
      <S.Block>
        <B.RandomValue slug={slug} values={['Ensuite', "D'un autre côté"]} />, des sites{' '}
        <B.RandomValue slug={slug} values={['de mise en relation', 'de courtage en crédit']} /> vous permettent de
        simuler les taux immobilier en ligne.
        <B.RandomValue slug={slug} values={['Cependant', 'Toutefois']} /> vous avez rarement une réponse directement.
        <B.RandomValue slug={slug} values={['Souvent', 'La plupart du temps']} /> vous avez un rendez-vous téléphonique
        avant de connaître les propositions les plus intéressantes. Surtout, les sites de mise en relation ne vous
        aident pas à <B.RandomValue slug={slug} values={['faire', 'rassembler les documents pour']} /> votre dossier de
        demande de prêt. Le service est gratuit mais moins <B.RandomValue slug={slug} values={['complet', 'poussé']} />{' '}
        que celui des courtiers immobiliers <B.RandomValue slug={slug} values={['physique', 'en agence']} />.
      </S.Block>
      <S.Title>
        <B.SubHeading type="h3">
          Pretto, votre courtier immobilier <B.RandomValue slug={slug} values={['gratuit', 'sans frais']} />
        </B.SubHeading>
      </S.Title>
      <S.Block>
        Pretto est le <B.RandomValue slug={slug} values={['premier', 'seul']} /> courtier immobilier{' '}
        <B.RandomValue slug={slug} values={['100%', 'complétement']} /> à distance qui vous fournit les taux immobiliers
        en cinq minutes, <B.RandomValue slug={slug} values={['prépare', 'optimise']} /> votre dossier de demande de prêt
        et vous accompagne{' '}
        <B.RandomValue slug={slug} values={["jusqu'à la signature", "juqu'au déblocage des fonds"]} />. Le service de
        Pretto est <B.RandomValue slug={slug} values={['complètement gratuit', 'sans frais']} />. Un service transparent
        et complet !
      </S.Block>
    </B.Container>
  )
}

CityContent.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default memo(CityContent)
