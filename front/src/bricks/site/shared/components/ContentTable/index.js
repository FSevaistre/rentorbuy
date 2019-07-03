import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import React, { Fragment, memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'
import { components, defaultOverrides } from '../../../utility/ContentBlock'

const csvToArray = (inputString, delimiter) => {
  const pattern = new RegExp(
    `(\\${delimiter}|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\${delimiter}\\r\\n]*))`,
    'gi'
  )

  let matches,
    rows = [[]]

  while ((matches = pattern.exec(inputString))) {
    let row = rows[rows.length - 1]

    if (matches[1].length && matches[1] !== delimiter) {
      row = []
      rows.push(row)
    }

    if (matches[1] === delimiter && row.length === 0) {
      row.push('')
    }

    if (matches[2]) {
      row.push(matches[2].replace(new RegExp('""', 'g'), '"'))
      continue
    }

    row.push(matches[3])
  }

  return rows
}

const cellOptions = {
  overrides: defaultOverrides,
  createElement(type, props, ...children) {
    if (
      [
        components.Emoji,
        components.Link,
        components.List,
        components.Text,
        'del',
        'em',
        'li',
        'strong',
        'sup'
      ].includes(type)
    ) {
      return React.createElement(type, props, ...children)
    }

    return React.createElement(Fragment, null, ...children)
  },
  forceBlock: true
}

const headCellOptions = {
  createElement(type, props, ...children) {
    return React.createElement(Fragment, null, ...children)
  }
}

const titleOptions = {
  createElement(type, { href }, ...children) {
    if (type === 'a') {
      return (
        <a href={href} rel="noreferrer noopener" target="_blank">
          {children}
        </a>
      )
    }

    return React.createElement(Fragment, null, ...children)
  },
  forceBlock: true
}

const ContentTable = ({ children, delimiter, footerRows, headerColumns, headerRows, hideTitle, title }) => {
  const rows = csvToArray(children, delimiter)

  const renderColumn = (isHead, column, index) => {
    if (index < headerColumns || isHead) {
      return (
        <S.HeadCell as="th" hasRightBorder={index === headerColumns - 1} key={index}>
          <Markdown options={headCellOptions}>{column}</Markdown>
        </S.HeadCell>
      )
    }

    return (
      <S.Cell key={index}>
        <Markdown options={cellOptions}>{column}</Markdown>
      </S.Cell>
    )
  }

  const renderRow = (isHead, row, index) => <S.Row key={index}>{row.map(renderColumn.bind(null, isHead))}</S.Row>

  return (
    <div itemScope itemType="http://schema.org/Table">
      {hideTitle && <meta itemProp="about" content={title} />}

      <S.Content>
        <S.Table>
          {!hideTitle && title && (
            <S.Title>
              <B.Text size="small" variant="neutral-1-60">
                <Markdown options={titleOptions}>{title}</Markdown>
              </B.Text>
            </S.Title>
          )}

          {headerRows > 0 && <S.Head>{rows.slice(0, headerRows).map(renderRow.bind(null, true))}</S.Head>}

          <S.Body>{rows.slice(headerRows, rows.length - footerRows).map(renderRow.bind(null, false))}</S.Body>

          {footerRows > 0 && (
            <S.Foot>{rows.slice(rows.length - footerRows, rows.length).map(renderRow.bind(null, true))}</S.Foot>
          )}
        </S.Table>
      </S.Content>
    </div>
  )
}

ContentTable.propTypes = {
  /** Separation character to use for cell splitting. */
  delimiter: PropTypes.string,
  /** Content of the table. CSV like. */
  children: PropTypes.string.isRequired,
  /** Number of lines to be used as table head. */
  footerRows: PropTypes.number,
  /** Number of cells to be used as lines head. */
  headerColumns: PropTypes.number,
  /** Number of lines to be used as table foot. */
  headerRows: PropTypes.number,
  /** Whether or not the title should be only used for SEO purposes. */
  hideTitle: PropTypes.bool,
  /** Title of the table. */
  title: PropTypes.string.isRequired
}

ContentTable.defaultProps = {
  delimiter: ';',
  footerRows: 0,
  headerColumns: 0,
  headerRows: 0,
  hideTitle: false
}

export default memo(ContentTable)
