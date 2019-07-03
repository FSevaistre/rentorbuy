import React, { memo, Fragment } from 'react'
import PropTypes from 'prop-types'
const hashCode = str => {
  return str.split('').reduce((prevHash, currVal) => ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0, 0)
}

const RandomValue = ({ slug, values }) => (
  <Fragment>{values[Math.abs(hashCode(values[0] + slug) % values.length)]}</Fragment>
)

RandomValue.propTypes = {
  slug: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default memo(RandomValue)
