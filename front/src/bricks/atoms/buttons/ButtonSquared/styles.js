import React from 'react'
import styled from 'styled-components'

import { colors, g } from '../../../core'
import { Link } from '../../../index'

export const Button = styled(({ href, variant, ...props }) =>
  href ? <Link {...props} href={href} /> : <button {...props} />
)`
  background-color: ${({ variant }) => colors[variant]};
  border-radius: 3px;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  font-size: 14px;
  font-weight: bold;
  line-height: ${g(6)};
  letter-spacing: 0.5px;
  padding: 0 ${g(2)};
  text-transform: uppercase;
  transition: background 300ms ease-in-out, box-shadow 300ms ease-in-out;
  white-space: nowrap;

  &:hover {
    background-color: ${({ variant }) => colors[`${variant}-d`] || colors[variant]};
    box-shadow: 0 2px 10px 0 ${colors.neutral1.fade(20)};
  }

  &:focus {
    outline: 1px dashed ${({ variant }) => colors[variant]};
  }

  span {
    color: ${colors.white};
  }
`
