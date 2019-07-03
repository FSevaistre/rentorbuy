import PropTypes from 'prop-types'
import range from 'lodash/range'
import React from 'react'

import { Card, Content, SubHeading, Text, Placeholder } from '../../../index'

import './DashboardHighlightsDetails.scss'

const DashboardHighlightsDetails = ({ cards, loading, titleVariant }) => {
  if (loading) {
    return (
      <div className="dashboard-highlights-details">
        {range(3).map(index => (
          <div className="dashboard-highlights-details__card" key={index}>
            <Card format={['small-radius', 'line']} variant="neutral-1-30">
              <Content size="x-small">
                <Placeholder
                  className="dashboard-highlights-details__placeholder--title"
                  variant={titleVariant.replace(/^([\w]+-[\d]).*/, '$1-l')}
                />

                <Placeholder className="dashboard-highlights-details__placeholder--content" />
              </Content>
            </Card>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="dashboard-highlights-details">
      {cards.map(({ title, value }, index) => (
        <div className="dashboard-highlights-details__card" key={index}>
          <Card format={['small-radius', 'line']} variant="neutral-1-30">
            <Content size="x-small">
              <div className="dashboard-highlights-details__card__content">
                <Text size="small" variant={titleVariant}>
                  {title}
                </Text>

                <SubHeading>{value}</SubHeading>
              </div>
            </Content>
          </Card>
        </div>
      ))}
    </div>
  )
}

DashboardHighlightsDetails.propTypes = {
  /** Cards array */
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  /** Whether or not the data is loading and the cards placeholder should be shown */
  loading: PropTypes.bool,
  /** The color variant applied to cards title */
  titleVariant: PropTypes.string
}

DashboardHighlightsDetails.defaultProps = {
  cards: [],
  titleVariant: 'neutral-1-60'
}

export default DashboardHighlightsDetails
