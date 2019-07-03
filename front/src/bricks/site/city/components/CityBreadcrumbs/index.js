import React, { memo } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const CityBreadcrumbs = ({ region, city }) => {
  const elements = [
    { href: '/courtier-immobilier/', label: 'Courtier immobilier' },
    { href: `/courtier-immobilier/region/${region.slug}/`, label: region.name },
    { href: `/courtier-immobilier/region/${region.slug}/${city.slug}/`, label: city.name }
  ]
  return (
    <S.Container>
      <B.Wrapper>
        <S.Breadcrumbs>
          {elements.map(({ href, label }, i) => {
            return (
              <S.Elem key={href}>
                <B.Link href={href}>{label}</B.Link>
                {i < elements.length - 1 && (
                  <S.Icon>
                    <B.Icon name="chevron-right" />
                  </S.Icon>
                )}
              </S.Elem>
            )
          })}
        </S.Breadcrumbs>
      </B.Wrapper>
    </S.Container>
  )
}

CityBreadcrumbs.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  }).isRequired,
  region: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  })
}

export default memo(CityBreadcrumbs)
