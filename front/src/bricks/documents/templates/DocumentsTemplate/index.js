import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, Progress, Divider, Desktop } from '../../../index'
import './DocumentsTemplate.scss'

export default class DocumentsTemplate extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    progressProps: PropTypes.object,
    breadcrumbSteps: PropTypes.object,
    onGoBack: PropTypes.func
  }
  render() {
    const { children, progressProps, breadcrumbSteps, onGoBack } = this.props
    return (
      <div className="documents-template">
        {breadcrumbSteps && (
          <Desktop>
            <Fragment>
              <div className="documents-template--breadcrumb">
                <Breadcrumb steps={breadcrumbSteps} onGoBack={onGoBack} />
              </div>
              <Divider />
            </Fragment>
          </Desktop>
        )}
        <div className="documents-template--content">{children}</div>
        <div className="documents-template--progress">
          <Progress variant="gradient-primary-2" {...progressProps} />
        </div>
      </div>
    )
  }
}
