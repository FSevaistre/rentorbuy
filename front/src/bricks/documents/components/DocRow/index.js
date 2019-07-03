import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Badge, Icon, Spinner, Tag, Text } from '../../../index'
import './DocRow.scss'

const badgeProps = {
  success: { icon: 'check', variant: 'success' },
  pending: { icon: 'clock', variant: 'success', format: 'full' },
  error: { icon: 'exclamation-mark', variant: 'error' },
  requested: { format: 'line', variant: 'neutral-1-20' }
}
const tagProps = {
  success: { variant: 'success', text: 'Validé', textVariant: 'white' },
  pending: {
    variant: 'success-l',
    text: 'Reçu, validation en cours',
    textVariant: 'success'
  },
  error: {
    variant: 'error',
    text: 'Invalide',
    textVariant: 'white'
  }
}
const STATUSES = {
  success: { badge: badgeProps.success, tag: tagProps.success },
  pending: { badge: badgeProps.pending, tag: tagProps.pending },
  error: { badge: badgeProps.error, tag: tagProps.error },
  requested: { badge: badgeProps.requested }
}
const FOLDER_COLOR = {
  success: 'success',
  pending: 'neutral-1',
  error: 'error',
  requested: 'neutral-1'
}

export default class DocRow extends PureComponent {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    docName: PropTypes.string.isRequired,
    mortgagorName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isUploading: PropTypes.bool,
    hasMortgagor: PropTypes.bool,
    sectionTitle: PropTypes.string,
    isFolder: PropTypes.bool
  }
  render() {
    const { filter, docName, mortgagorName, onClick, isUploading, hasMortgagor, sectionTitle, isFolder } = this.props
    const { badge, tag } = STATUSES[filter]
    return (
      <div className="doc-row" onClick={onClick}>
        {isFolder ? (
          <div className="doc-row--section">
            <div className="doc-row--section--icon">
              <Icon name="folder-lines" variant={FOLDER_COLOR[filter]} />
            </div>
            {sectionTitle}
            {['error', 'pending', 'success'].includes(filter) && (
              <div className="doc-row--section--tag">
                <div className="doc-row--section--tag--content">
                  <Tag variant={tag.variant}>
                    <Text variant={tag.textVariant} size="small">
                      {tag.text}
                    </Text>
                  </Tag>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Fragment>
            <div className="doc-row--badge">{isUploading ? <Spinner size="small" /> : <Badge {...badge} />}</div>
            <div className="doc-row--doc-name">{docName}</div>
            {hasMortgagor && (
              <div className="doc-row--mortgagor-name">
                <Text variant="neutral-1-60">{mortgagorName}</Text>
              </div>
            )}
            <div className="doc-row--tag">
              {filter !== 'requested' && (
                <div className="doc-row--tag--content">
                  <Tag variant={tag.variant}>
                    <Text variant={tag.textVariant} size="small">
                      {tag.text}
                    </Text>
                  </Tag>
                </div>
              )}
            </div>
          </Fragment>
        )}
        <div className="doc-row--icon">
          <Icon name="chevron-right" />
        </div>
      </div>
    )
  }
}
