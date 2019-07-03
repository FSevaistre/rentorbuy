import PropTypes from 'prop-types'
import React, { createElement, memo, useState } from 'react'

import { Link } from '../../../../index'
import * as S from './styles'

const Items = ({ items, ...props }) => {
  if (!items.length) {
    return null
  }

  const isDefault = props.itemDefault === items[0].title

  return (
    <S.Item
      current={items[1] && props.itemCurrent === items[1].title}
      variant={items[1] && items[1].variant}
      onBlur={props.onBlur}
      onFocus={props.onFocus.bind(null, items[0].title)}
      onMouseLeave={props.onMouseLeave}
      onMouseOver={props.onMouseOver.bind(null, items[0].title)}
      tabIndex="0"
    >
      {createElement(
        S.Label,
        Object.assign(
          {
            as: isDefault ? 'div' : Link,
            tabIndex: '-1'
          },
          isDefault ? {} : { href: items[0].url }
        ),
        items[0].title
      )}

      <Items {...props} items={items.slice(1)} />
    </S.Item>
  )
}
Items.propTypes = {
  items: PropTypes.array,
  itemDefault: PropTypes.string,
  itemCurrent: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseOver: PropTypes.func
}

const ChapterBreadcrumb = ({ items, itemDefault = null }) => {
  const [itemCurrent, setItemHovered] = useState(itemDefault)

  const onBlur = () => setItemHovered(itemDefault)
  const onFocus = (item, event) => {
    if (event.currentTarget !== event.target) {
      return
    }

    setItemHovered(item)
  }

  const onMouseLeave = onBlur
  const onMouseOver = (item, event) => {
    if (event.currentTarget !== event.target.parentNode) {
      return
    }

    setItemHovered(item)
  }

  return (
    <S.Breadcrumb current={itemCurrent === items[0].title} variant={items[0].variant}>
      <S.Items>
        <Items
          itemCurrent={itemCurrent}
          itemDefault={itemDefault}
          items={items}
          onBlur={onBlur}
          onFocus={onFocus}
          onMouseLeave={onMouseLeave}
          onMouseOver={onMouseOver}
        />
      </S.Items>
    </S.Breadcrumb>
  )
}

ChapterBreadcrumb.propTypes = {
  /** Default selected item. */
  itemDefault: PropTypes.string.isRequired,
  /** List of items. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      variant: PropTypes.string.isRequired
    })
  ).isRequired
}

export default memo(ChapterBreadcrumb)
