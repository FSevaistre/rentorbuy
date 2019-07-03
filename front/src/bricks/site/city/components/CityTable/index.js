import React, { memo, Fragment } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const CityTable = ({ appUrl, rates, onNav }) => {
  return (
    <Fragment>
      <S.Table itemScope itemType="http://schema.org/Table">
        <meta itemProp="about" content="banks rates" />
        <thead>
          <S.TableRow>
            <S.TableHead>
              <B.Text size="x-small">Banque</B.Text>
            </S.TableHead>
            <S.TableHead>
              <B.Text size="x-small">Excellents</B.Text>
            </S.TableHead>
            <S.TableHead>
              <B.Text size="x-small">Bons</B.Text>
            </S.TableHead>
            <S.TableHead />
          </S.TableRow>
        </thead>
        <S.TableBody onClick={onNav(appUrl)}>
          {rates.map((rate, i) => {
            return (
              <S.TableRow key={i}>
                <S.TableDatacell>
                  <S.Cell type="bank">
                    <S.LogoBank>
                      <B.Image
                        slug={`v1508856831/banks/${rate.slug}`}
                        options="q_auto"
                        isImg
                        description={rate.group_name}
                      />
                    </S.LogoBank>
                    <div>{rate.group_name}</div>
                  </S.Cell>
                </S.TableDatacell>
                <S.TableDatacell>
                  <S.Cell type="lowRate">
                    <strong>{rate.good_rate}%</strong>
                  </S.Cell>
                </S.TableDatacell>
                <S.TableDatacell>
                  <S.Cell type="highRate">
                    <strong>{rate.bad_rate}%</strong>
                  </S.Cell>
                </S.TableDatacell>
                <S.TableDatacell>
                  <S.Cell type="action">
                    <B.Button format="circle" href={appUrl} icon="arrow-right" variant="primary-1" size="small" />
                  </S.Cell>
                </S.TableDatacell>
              </S.TableRow>
            )
          })}
        </S.TableBody>
      </S.Table>
      <S.Nota>
        <B.Text variant="neutral-1-60" size="x-small">
          *Ces taux sont obtenus sur 15 ans.
        </B.Text>
      </S.Nota>
    </Fragment>
  )
}

CityTable.propTypes = {
  appUrl: PropTypes.string.isRequired,
  onNav: PropTypes.func.isRequired,
  rates: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      group_name: PropTypes.string.isRequired,
      good_rate: PropTypes.number.isRequired,
      bad_rate: PropTypes.number.isRequired
    })
  ).isRequired
}

export default memo(CityTable)
