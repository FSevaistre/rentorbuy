import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { TransitionGroup } from 'react-transition-group'

import * as B from '../../../index'
import * as S from './styles'

const ListItem = ({ content, onDelete, onEdit, title }) => (
  <S.ListItem>
    <B.Card format="line" variant="neutral-1-20">
      <S.ListItemHeader>
        <B.Content size="x-small" variant="neutral-1">
          <S.ListItemHeaderContentActions>
            <S.ListItemHeaderContentAction>
              <B.SubHeading size="small">{title}</B.SubHeading>
            </S.ListItemHeaderContentAction>

            <S.ListItemHeaderContentActions>
              {onEdit && (
                <S.ListItemHeaderContentActions withCursor onClick={onEdit}>
                  <S.ListItemHeaderContentAction>
                    <B.Desktop>Modifier</B.Desktop>
                  </S.ListItemHeaderContentAction>

                  <S.ListItemHeaderContentAction>
                    <B.Icon name="pen" />
                  </S.ListItemHeaderContentAction>
                </S.ListItemHeaderContentActions>
              )}

              {onDelete && (
                <S.ListItemHeaderContentAction withCursor onClick={onDelete}>
                  <B.Icon name="cross" />
                </S.ListItemHeaderContentAction>
              )}
            </S.ListItemHeaderContentActions>
          </S.ListItemHeaderContentActions>
        </B.Content>
      </S.ListItemHeader>

      <B.Content>
        <div className="card-field--content">{content}</div>
      </B.Content>
    </B.Card>
  </S.ListItem>
)

const ApplicationListField = ({ addLabel, items, onAdd }) => (
  <div>
    <TransitionGroup component={Fragment}>
      {items.map(({ id, ...item }) => (
        <B.CollapsibleRow component={<ListItem {...item} />} key={id} parentComponent={S.ListItemParent} />
      ))}
    </TransitionGroup>

    <S.ListItemParent>
      <S.ListItem>
        <S.Add onClick={onAdd}>
          <B.Content>
            <S.AddContent>
              <S.AddButton>
                <B.Button format="circle" iconProps={{ name: 'add' }} size="x-small" />
              </S.AddButton>

              <div>{addLabel}</div>
            </S.AddContent>
          </B.Content>
        </S.Add>
      </S.ListItem>
    </S.ListItemParent>
  </div>
)

ApplicationListField.propTypes = {
  addLabel: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      onDelete: PropTypes.func,
      onEdit: PropTypes.func,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onAdd: PropTypes.func.isRequired
}

export default ApplicationListField
