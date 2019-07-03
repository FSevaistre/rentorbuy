import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {
  Card,
  Icon,
  Notification,
  UploadingFilesNotification,
  CompletedFilesNotification,
  DeletingFileNotification,
  DeletedFileNotification
} from '../../../index'
import './Notifications.scss'

const slugs = ['uploading-files', 'completed-files', 'deleting-file', 'deleted-file']

const element = (slug, props) => {
  switch (slug) {
    case 'uploading-files':
      return <UploadingFilesNotification {...props} />
    case 'completed-files':
      return <CompletedFilesNotification {...props} />
    case 'deleting-file':
      return <DeletingFileNotification {...props} />
    case 'deleted-file':
      return <DeletedFileNotification {...props} />
    default:
      return <div {...props}>Not a valid notification type</div>
  }
}

export default class Notifications extends Component {
  static propTypes = {
    /** Notifications. */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        slug: PropTypes.oneOf(slugs).isRequired,
        props: PropTypes.object,
        onClose: PropTypes.func
      })
    ).isRequired
  }
  render() {
    const { items } = this.props
    const notifications = [...items].reverse()
    return (
      <Notification isOpen={items.length > 0}>
        <TransitionGroup>
          {notifications.map(({ id, slug, props, onClose }) => {
            return (
              <CSSTransition key={id} classNames="notifications--item--transition" timeout={250} unmountOnExit>
                <div className="notifications--item">
                  {onClose && (
                    <div className="notifications--item--close" onClick={onClose}>
                      <Icon name="cross" variant="neutral-1-40" />
                    </div>
                  )}
                  <Card variant="white" zDepth={2}>
                    {onClose ? (
                      <div className="notifications--item__close-wrapper">{element(slug, props)}</div>
                    ) : (
                      element(slug, props)
                    )}
                  </Card>
                </div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      </Notification>
    )
  }
}
