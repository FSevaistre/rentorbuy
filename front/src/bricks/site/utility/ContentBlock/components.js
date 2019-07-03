import clamp from 'lodash/clamp'
import React, { Children, cloneElement, createElement } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../index'
import * as S from './styles'

const getStringFromChildren = (children = []) =>
  Children.toArray(children).reduce((previous, child) => {
    if (child.props) {
      return previous + '\n\r' + getStringFromChildren(child.props.children)
    }

    return previous + child
  }, '')

export const Blockquote = ({ children, ...props }) => (
  <S.BlockLarge>
    <B.Container full>
      <B.Blockquote {...props}>{children}</B.Blockquote>
    </B.Container>
  </S.BlockLarge>
)
Blockquote.propTypes = {
  children: PropTypes.node.isRequired
}

export const Chart = props => (
  <S.BlockLarge>
    <B.Container full>
      <B.Chart {...props} />
    </B.Container>
  </S.BlockLarge>
)

export const Column = ({ children, columnsPerRow, ...props }) => (
  <S.Column columnsPerRow={columnsPerRow} columnWidth={100 / clamp(columnsPerRow, 1, 4)}>
    {createElement(S.ColumnContent, { ...props }, <S.ColumnInner>{children}</S.ColumnInner>)}
  </S.Column>
)
Column.propTypes = {
  children: PropTypes.node.isRequired,
  columnsPerRow: PropTypes.number
}

export const Cta = ({ children, href }) => (
  <S.Block center>
    <B.Container>
      <B.Button href={href} variant="accent-1">
        {children}
      </B.Button>
    </B.Container>
  </S.Block>
)
Cta.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string
}

export const EbookBanner = () => (
  <S.BlockLarge>
    <B.Container full>
      <B.EbookBanner />
    </B.Container>
  </S.BlockLarge>
)

export const Grid = ({ children, columnsPerRow = 2, hideBackground = false }) => (
  <S.BlockLarge>
    <B.Container full>
      <S.Grid>
        {Children.map(children, child =>
          cloneElement(child, { columnsPerRow: parseInt(columnsPerRow, 10), hideBackground })
        )}
      </S.Grid>
    </B.Container>
  </S.BlockLarge>
)
Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columnsPerRow: PropTypes.string,
  hideBackground: PropTypes.bool
}

export const Heading = ({ as, children, ...props }) => (
  <S.BlockHeading>
    <B.Container>
      <B.SubHeading {...props} type={as}>
        {children}
      </B.SubHeading>
    </B.Container>
  </S.BlockHeading>
)
Heading.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string
}

export const Image = ({ slug, full, ...props }) => (
  <S.BlockLarge>
    <B.Container full>
      <B.Image slug={`website/content/${slug}`} {...props} fitsToContent full={!!full} />
    </B.Container>
  </S.BlockLarge>
)
Image.propTypes = {
  slug: PropTypes.string.isRequired,
  full: PropTypes.bool
}

export const Latex = ({ children }) => <B.Latex>{getStringFromChildren(children)}</B.Latex>
Latex.propTypes = {
  children: PropTypes.node.isRequired
}

export const Link = ({ children, href }) => {
  return (
    <S.TextLink>
      <B.Link href={href}>{children}</B.Link>
    </S.TextLink>
  )
}
Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string
}

export const List = ({ as, children }) => (
  <S.Block>
    <B.Container>
      <B.TextList as={as}>{children}</B.TextList>
    </B.Container>
  </S.Block>
)
List.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string
}

export const Text = ({ children, full }) => (
  <S.Block full={full}>
    <B.Container>
      <B.Text type="p">{children}</B.Text>
    </B.Container>
  </S.Block>
)
Text.propTypes = {
  children: PropTypes.node.isRequired,
  full: PropTypes.bool
}

export const Table = ({ content, footerRows, headerColumns, headerRows, hideTitle, ...props }) => (
  <S.BlockLarge>
    <B.Container full>
      <B.ContentTable
        footerRows={parseInt(footerRows || 0, 10)}
        headerColumns={parseInt(headerColumns || 0, 10)}
        headerRows={parseInt(headerRows || 0, 10)}
        hideTitle={!!hideTitle}
        {...props}
      >
        {content}
      </B.ContentTable>
    </B.Container>
  </S.BlockLarge>
)
Table.propTypes = {
  content: PropTypes.node.isRequired,
  footerRows: PropTypes.string,
  headerColumns: PropTypes.string,
  headerRows: PropTypes.string,
  hideTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

export const Emoji = ({ children, ...props }) => <B.Emoji {...props}>{getStringFromChildren(children)}</B.Emoji>
Emoji.propTypes = {
  children: PropTypes.node.isRequired
}

export const Trustpilot = props => (
  <S.BlockLarge>
    <B.Container full>
      <B.Trustpilot {...props} />
    </B.Container>
  </S.BlockLarge>
)
