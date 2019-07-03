import classnames from 'classnames'
import React, { forwardRef, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Icon, Link } from '../../..'
import './Button.scss'

const getComponent = (href, props, textVariant, content) => {
  const children = (
    <div className={classnames('button__text', { [`button__text--${textVariant}`]: textVariant })}>{content}</div>
  )

  if (!href) {
    return <div>{React.createElement('button', props, children)}</div>
  }

  if (/^\//.test(href)) {
    return <div>{React.createElement(Link, { ...props, href }, children)}</div>
  }

  if (href.indexOf('https://app.pretto.fr') === 0)
    return <div>{React.createElement('a', { ...props, href, rel: 'nofollow' }, children)}</div>

  return (
    <div>{React.createElement('a', { ...props, href, rel: 'noreferrer noopener', target: '_blank' }, children)}</div>
  )
}

const Button = forwardRef(
  (
    {
      size,
      type,
      children,
      label,
      href,
      target,
      variant,
      textVariant,
      format,
      disabled,
      icon,
      iconPosition,
      iconSize,
      iconProps,
      onClick,
      scaleOnHover
    },
    ref
  ) => {
    const handleClick = e => {
      if (!disabled) {
        onClick()
      } else {
        e.preventDefault()
      }
    }

    const handleKeyDown = e => {
      if (e.keyCode === '13') handleClick()
    }

    const formats = Array.isArray(format) ? format : [format]
    const formatsClassnames = formats.filter(Boolean).map(format => `button--${format}`)

    const buttonClass = classnames('button', formatsClassnames, `button--${size}`, `button--${variant}`, {
      'button--disabled': disabled,
      'button--scale-on-hover': scaleOnHover
    })
    const buttonProps = {
      disabled,
      ref,
      type,
      onKeyDown: handleKeyDown,
      className: buttonClass,
      onClick: handleClick,
      target
    }

    const content = children || label
    const iconContent = (icon !== null || !!iconProps) && <Icon name={icon} {...iconProps} />

    const buildComponent = getComponent.bind(null, href, buttonProps, textVariant)

    if (content === '') {
      return buildComponent(iconContent)
    }

    if (iconContent && iconPosition === 'left') {
      return buildComponent(
        <Fragment>
          <span className={classnames('button__icon', 'button__icon--left', `button__icon--${iconSize}`)}>
            {iconContent}
          </span>
          <span className="button__icon-label">{content}</span>
        </Fragment>
      )
    }

    if (iconContent && iconPosition === 'right') {
      return buildComponent(
        <Fragment>
          <span className="button__icon-label">{content}</span>
          <span className={classnames('button__icon', 'button__icon--right', `button__icon--${iconSize}`)}>
            {iconContent}
          </span>
        </Fragment>
      )
    }

    return buildComponent(content)
  }
)

Button.propTypes = {
  /** Label of button. */
  children: PropTypes.node,
  /** When specified, button will render a link. */
  href: PropTypes.string,
  /** Sets target of a link. */
  target: PropTypes.string,
  /** @deprecated (should be children instead) Label of button. */
  label: PropTypes.string,
  /** Type of button. Must be <code>submit</code> if used in form.*/
  type: PropTypes.string,
  /** Choose one of <b>x-small</b>, <b>small</b>, <b>medium</b>, or <b>large</b>. */
  size: PropTypes.string,
  /** Triggered on click. */
  onClick: PropTypes.func,
  /** Button disabled if set to <b>true</b>. */
  disabled: PropTypes.bool,
  /** Variant colors of button. */
  variant: PropTypes.string,
  /** Variant colors of label. */
  textVariant: PropTypes.string,
  /** Format style of button. string if single format, array of strings if combined. <br />
   Formats are: <code>line</code>, <code>full</code>, <code>squared</code>, <code>old</code> (will be removed). */
  format: PropTypes.any,
  /** @deprecated (should use iconProps instead) Icon name. Cf: [Icon](#icon) */
  icon: PropTypes.string,
  /** Position of icon: <code>left</code> or <code>right</code>. */
  iconPosition: PropTypes.string,
  /** @deprecated (should use iconProps instead) Size of icon: <code>small</code>, <code>medium</code> or <code>large</code>. */
  iconSize: PropTypes.string,
  /** Props of atom Icon. */
  iconProps: PropTypes.object,
  /** If true, the button scales on hover */
  scaleOnHover: PropTypes.bool
}

Button.defaultProps = {
  label: '',
  type: 'button',
  size: 'medium',
  disabled: false,
  variant: 'primary-1',
  textVariant: '',
  format: '',
  onClick: () => {},
  icon: null,
  iconPosition: 'left',
  iconSize: 'medium'
}

export default Button
