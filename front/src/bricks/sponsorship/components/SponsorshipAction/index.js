import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Icon, Card, SubHeading } from '../../../index'
import './SponsorshipAction.scss'

const SponsorshipAction = ({ onClick, icon, children }) => (
  <Card format={['line', 'small-radius']} variant="neutral-1-20">
    <div className="sponsorship-action" onClick={onClick}>
      <div className="sponsorship-action--icon">
        <Icon name={icon} />
      </div>
      <div className="sponsorship-action--text">
        <SubHeading>{children}</SubHeading>
      </div>
    </div>
  </Card>
)
SponsorshipAction.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  children: PropTypes.node
}
export default memo(SponsorshipAction)
