import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { NavigationContext } from '../../../index'

const Link = ({ children, href, ...props }) => (
  <NavigationContext.Consumer>
    {value => {
      if (!/^\//.test(href)) {
        return (
          <a href={href} rel="noreferrer noopener" target="_blank" {...props}>
            {children}
          </a>
        )
      }

      if (!value || href.indexOf('https://app.pretto.fr') === 0) {
        return (
          <a href={href} {...props}>
            {children}
          </a>
        )
      }

      const LinkComponent = value

      return (
        <LinkComponent to={href} {...props}>
          {children}
        </LinkComponent>
      )
    }}
  </NavigationContext.Consumer>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
}

export default memo(Link)
