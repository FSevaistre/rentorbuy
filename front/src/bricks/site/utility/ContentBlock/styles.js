import React from 'react'
import styled, { css } from 'styled-components'

import { Link } from '../../../index'
import { Container } from '../Container/styles'
import { colors, g, breakpoints } from '../../../core'

export const Column = styled.div`
  & + & {
    margin-top: ${g(3)};
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-basis: ${({ columnWidth }) => columnWidth}%;
    max-width: ${({ columnWidth }) => columnWidth}%;
    padding: 0 ${g(3 / 2)};

    & + & {
      margin-top: 0;
    }

    &:nth-child(n + ${({ columnsPerRow }) => columnsPerRow + 1}) {
      margin-top: ${g(3)};
    }
  }
`

// eslint-disable-next-line no-unused-vars
export const ColumnContent = styled(({ children, href, hideBackground, vAlign, ...props }) => {
  if (!href) {
    return <div {...props}>{children}</div>
  }

  if (/^\//.test(href)) {
    return (
      <Link {...props} href={href}>
        {children}
      </Link>
    )
  }

  return (
    <a {...props} href={href} rel="noreferrer noopener" target="_blank">
      {children}
    </a>
  )
})`
  background-color: ${colors.neutral1.light};
  border-radius: ${g(1)};
  display: block;
  max-width: 100%;
  padding: ${g(2)};

  ${({ align }) => {
    switch (align) {
      case 'center':
        return css`
          text-align: center;
        `

      case 'right':
        return css`
          text-align: right;
        `

      default:
        return ''
    }
  }}

  ${({ href }) =>
    href &&
    css`
      &:focus,
      &:hover {
        outline: 0px transparent;
      }
    `}

  ${({ hideBackground }) =>
    hideBackground &&
    css`
      background-color: transparent;
      padding: 0;
    `}

  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-grow: 1;

    ${({ vAlign }) => {
      switch (vAlign) {
        case 'bottom':
          return css`
            align-items: flex-end;
            display: flex;
          `

        case 'middle':
          return css`
            align-items: center;
            display: flex;
          `

        default:
          return ''
      }
    }}
  }
`

export const ColumnInner = styled.div`
  max-width: 100%;

  & > * + * {
    margin-top: ${g(2)};
  }
`

export const Grid = styled.div`
  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 ${g(-3 / 2)};
  }
`

export const Content = styled.div`
  em {
    font-style: italic;
  }
`

export const Block = styled.div`
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  ${Content} > & + & {
    margin-top: ${g(4)};
  }

  ${Container} ${Container} {
    padding: 0;
    margin: 0;
  }
`

export const BlockLarge = styled(Block)`
  ${Content} > & + ${Block} {
    margin-top: ${g(4)};
  }
`

export const BlockHeading = styled(Block)`
  ${Content} > & + ${Block} {
    margin-top: ${g(4)};
  }
`

export const TextLink = styled.span`
  color: ${colors.primary1.default};

  a:focus,
  a:hover {
    outline: 0px transparent;
    text-decoration: underline;
  }
`
