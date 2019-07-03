import React, { memo } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const CitySteps = ({ slug }) => {
  return (
    <B.Wrapper>
      <S.Steps>
        <S.Step>
          <S.Number>1</S.Number>
          <p>
            Nous négocions pour vous les meilleurs taux de crédit immobilier avec les banques proche de chez vous et
            nous optimisons les conditions de votre prêt.
          </p>
        </S.Step>
        <S.Step>
          <S.Number>2</S.Number>
          <p>
            Nous vous accompagnons tout au long de la votre recherche : simulation,{' '}
            <B.RandomValue slug={slug} values={['promesse de financement', 'attestation de financement']} />
            , <B.RandomValue slug={slug} values={['négociation', 'optimisation']} /> des taux{' '}
            <B.RandomValue
              slug={slug}
              values={['jusqu’à la signature de l’acte authentique', 'jusqu’au déblocage des fonds', 'jusqu’à la fin']}
            />
            .
          </p>
        </S.Step>
        <S.Step>
          <S.Number>3</S.Number>
          <p>
            <B.RandomValue
              slug={slug}
              values={['Tout cela gratuitement', 'Tout cela gratuit', 'Tout cela sans frais', 'Tout cela pour 0 €']}
            />{' '}
            et sans engagement. Pretto est rémunéré par les banques de façon transparente.
          </p>
        </S.Step>
      </S.Steps>
    </B.Wrapper>
  )
}

CitySteps.propTypes = {
  slug: PropTypes.string.isRequired
}

export default memo(CitySteps)
