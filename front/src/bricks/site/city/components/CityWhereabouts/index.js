import React, { memo } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const CityWhereabouts = ({ cities }) => {
  return (
    <B.Wrapper>
      <S.Cities>
        {cities.map(({ slug, region_slug, city_name }) => {
          return (
            <S.City key={slug}>
              <B.Link href={`/courtier-immobilier/region/${region_slug}/${slug}/`}>
                <B.Text size="small" variant="primary-1">
                  Courtier immobilier à {city_name}
                </B.Text>
              </B.Link>
            </S.City>
          )
        })}
      </S.Cities>
    </B.Wrapper>
  )
}

CityWhereabouts.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      region_slug: PropTypes.string.isRequired,
      city_name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default memo(CityWhereabouts)
