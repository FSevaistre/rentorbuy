import PropTypes from 'prop-types'
import React, { memo, Fragment } from 'react'

import * as B from '../../../../index'

const ContactPage = ({ onShowIntercom }) => {
  return (
    <Fragment>
      <B.ContactHeader onShowIntercom={onShowIntercom} />

      <B.ContactQuestions />

      <B.FooterCta />
    </Fragment>
  )
}

ContactPage.propTypes = {
  onShowIntercom: PropTypes.func
}

export default memo(ContactPage)
