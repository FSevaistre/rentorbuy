import React, { memo } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const CityHeader = ({ title, city, appUrl }) => {
  return (
    <header>
      <B.Wrapper full>
        <B.ContentHero title={title} noShare />
        <B.Container>
          <p>
            Vous cherchez un courtier en <B.Link href="/">crédit immobilier</B.Link> à {city} ? <br /> Pretto est un
            courtier immobilier en ligne et gratuit. Un expert vous conseille tout au long de votre projet et négocie
            pour vous le meilleur taux immobilier.
          </p>
        </B.Container>
        <S.Button>
          <B.Button href={appUrl} rel="nofollow" variant="accent-1" size="large">
            Simuler mon prêt
          </B.Button>
        </S.Button>
      </B.Wrapper>
    </header>
  )
}

CityHeader.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  appUrl: PropTypes.string.isRequired
}

export default memo(CityHeader)
