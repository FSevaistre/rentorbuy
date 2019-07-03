import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Heading, Progress, Text } from '../../../index'
import './SponsorshipProgress.scss'

const TITLE = {
  junior: {
    max: 5,
    title: 'Ambassadeur junior'
  },
  confirmed: { max: 10, title: 'Ambassadeur confirmé' },
  exceptional: { max: null, title: 'Ambassadeur exceptionnel' }
}

const SponsorshipProgress = ({ progress }) => {
  const level = progress < 5 ? 'junior' : progress < 10 ? 'confirmed' : 'exceptional'
  const { max, title } = TITLE[level]
  return (
    <div className="sponsorship-progress">
      <div className="sponsorship-progress--title">
        <div className="sponsorship-progress--title--steps">
          <Heading>
            {max ? (
              <span>
                {progress} / {max}
              </span>
            ) : (
              <span>{progress}</span>
            )}
          </Heading>
        </div>
        <div className="sponsorship-progress--title--text">
          <Text variant="neutral-1-60">{title}</Text>
        </div>
      </div>
      {max && (
        <div className="sponsorship-progress--bar">
          <Progress value={progress} max={max} variant="accent-1" backgroundVariant="white" format="rounded" />
        </div>
      )}
    </div>
  )
}

SponsorshipProgress.propTypes = {
  progress: PropTypes.number.isRequired
}

export default memo(SponsorshipProgress)
