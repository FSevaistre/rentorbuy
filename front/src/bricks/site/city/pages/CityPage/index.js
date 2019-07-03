import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const Title = ({ children }) => (
  <B.Wrapper>
    <S.SectionTitle>
      <B.SubHeading type="h2" variant="primary-1" size="large">
        {children}
      </B.SubHeading>
    </S.SectionTitle>
  </B.Wrapper>
)
Title.propTypes = {
  children: PropTypes.node.isRequired
}
const CityPage = ({ city, region, advisor, nearbyCities, map, onNav, rates, banks, zipcode, appUrl }) => {
  const title = `Pretto, votre courtier immobilier à ${city.name}`

  return (
    <article>
      <B.CityHeader title={title} city={city.name} appUrl={appUrl} />

      <S.Section>
        <Title>Nous comparons les meilleurs taux immobiliers à {city.name}</Title>
        <B.CityRates advisor={advisor} appUrl={appUrl} regionName={region.name} onNav={onNav} rates={rates} />
      </S.Section>

      <S.Section>
        <Title>Trouvez le meilleur taux à {city.name} grâce à votre courtier immobilier</Title>
        <B.CitySteps slug={city.slug} />
      </S.Section>

      <S.Section>
        <Title>Votre courtier immobilier vous présente la meilleure banque pour vous de {city.name}</Title>
        <S.Map>{map}</S.Map>
        <B.CityBanks banks={banks} zipcode={zipcode} city={city.name} />
      </S.Section>

      <S.Section>
        <Title>Pretto, un courtier immobilier gratuit pour votre achat immobilier à {city.name}</Title>
        <B.CityContent {...city} />
      </S.Section>

      <S.Section>
        <Title>Trouvez votre courtier immobilier aux alentours de {city.name}</Title>
        <B.CityWhereabouts cities={nearbyCities} />
      </S.Section>

      <B.CityBreadcrumbs region={region} city={city} />
    </article>
  )
}

CityPage.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  }).isRequired,
  region: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  }),
  advisor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }),
  nearbyCities: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      region_slug: PropTypes.string.isRequired,
      city_name: PropTypes.string.isRequired
    })
  ),
  map: PropTypes.element.isRequired,
  onNav: PropTypes.func.isRequired,
  rates: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      group_name: PropTypes.string.isRequired,
      good_rate: PropTypes.number.isRequired,
      bad_rate: PropTypes.number.isRequired
    })
  ).isRequired,
  banks: PropTypes.arrayOf(
    PropTypes.shape({
      group: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      phone_link: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string.isRequired
    })
  ).isRequired,
  zipcode: PropTypes.string.isRequired,
  appUrl: PropTypes.string.isRequired
}

export default memo(CityPage)
