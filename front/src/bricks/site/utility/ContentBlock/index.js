import values from 'lodash/values'
import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import React, { Fragment, memo } from 'react'

import * as C from './components'
import * as S from './styles'
import * as B from '../../../index'

const Wrapper = ({ children }) => (
  <S.Block>
    <B.Container>{children}</B.Container>
  </S.Block>
)
Wrapper.propTypes = { children: PropTypes.node.isRequired }

export const components = C

const inlineElements = ['Emoji', 'Link', 'del', 'em', 'li', 'strong', 'sup']
const defaultCreateElement = (type, props, children) => {
  if (type === 'div') {
    return React.createElement(Fragment, null, children)
  }

  if (type === 'img') {
    return <C.Image {...props} slug={props.src} description={props.alt} fitsToContent />
  }

  if (
    type === C.Text &&
    React.Children.toArray(children).some(
      child =>
        typeof child === 'object' &&
        child !== null &&
        !inlineElements.some(elementName => {
          if (child.type.displayName) {
            return elementName === child.type.displayName
          }

          if (typeof child.type === 'string') {
            return elementName === child.type
          }

          return false
        })
    )
  ) {
    return React.createElement(Wrapper, null, children)
  }

  if (![...values(C), ...inlineElements].includes(type)) {
    return React.createElement(Wrapper)
  }

  return React.createElement(type, props, children)
}
defaultCreateElement.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

export const defaultOverrides = {
  // CUSTOMS
  Blockquote: C.Blockquote,
  Chart: C.Chart,
  Column: C.Column,
  Cta: C.Cta,
  EbookBanner: C.EbookBanner,
  Emoji: C.Emoji,
  Grid: C.Grid,
  Image: C.Image,
  Latex: C.Latex,
  Table: C.Table,
  Trustpilot: C.Trustpilot,

  // STANDARDS
  a: C.Link,
  h1: { component: C.Heading, props: { as: 'h2', size: 'large' } },
  h2: { component: C.Heading, props: { as: 'h2', size: 'large' } },
  h3: { component: C.Heading, props: { as: 'h3', size: 'medium' } },
  h4: { component: C.Heading, props: { as: 'h4', size: 'medium' } },
  ol: { component: C.List, props: { as: 'ol' } },
  p: C.Text,
  ul: { component: C.List, props: { as: 'ul' } }
}

const ContentBlock = ({ children, overrides }) => {
  if (!children) {
    return null
  }

  const tables = {}
  const source = children.replace(
    /<Table([^>]*)>([\S\s]*?)(?=<\/Table>)/g,
    (outerContent, attributes = '', innerContent = '') => {
      const id = `content_table-${Object.keys(tables).length + 1}`
      const pattern = /([\d\w]+)(?:="([^"]*)")?/g
      const table = { content: innerContent.trim() }

      let match

      while ((match = pattern.exec(attributes))) {
        table[match[1]] = typeof match[2] === 'undefined' ? 'true' : match[2]
      }

      tables[id] = table

      return `<Table id="${id}" />`
    }
  )

  const options = {
    overrides,
    createElement(type, props, ...children) {
      if (type === C.Table) {
        const tableProps = tables[props.id]

        if (!tableProps) {
          return null
        }

        return React.createElement(type, { ...tableProps, key: props.id })
      }

      return defaultCreateElement(type, { ...props }, ...children)
    },
    forceBlock: true
  }

  return (
    <S.Content>
      <Markdown options={options}>{source}</Markdown>
    </S.Content>
  )
}

ContentBlock.defaultProps = {
  createElement: defaultCreateElement,
  overrides: defaultOverrides
}

ContentBlock.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string,
  createElement: PropTypes.func,
  overrides: PropTypes.object
}

export default memo(ContentBlock)
