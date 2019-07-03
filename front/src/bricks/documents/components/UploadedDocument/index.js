import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Progress, Spinner } from '../../../index'
import './UploadedDocument.scss'

export default class UploadedDocument extends Component {
  static propTypes = {
    /** Name of document. */
    children: PropTypes.node.isRequired,
    /** Progress of UploadedDocument. */
    progressProps: PropTypes.object,
    /** is Document Uploaded. */
    isUploaded: PropTypes.bool,
    /** Delete function of document. */
    onDelete: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      isUploaded: props.isUploaded
    }
  }

  handleDelete = () => {
    if (this.state.isUploaded) this.props.onDelete()
    this.setState({ isUploaded: false })
  }

  render() {
    const { children, progressProps } = this.props
    const { isUploaded } = this.state
    const icon = isUploaded ? <Icon name="trash" variant="error" /> : <Spinner size="small" />
    return (
      <div className="uploaded-document--wrapper">
        <div className="uploaded-document">
          <div className="uploaded-document--file">
            <Icon name="file" variant="neutral-1-40" />
          </div>
          <div className="uploaded-document--text">{children}</div>
          {!(progressProps && progressProps.value < 1) && (
            <div className="uploaded-document--delete" onClick={this.handleDelete}>
              {icon}
            </div>
          )}
        </div>
        {!isUploaded && (
          <div className="uploaded-document--progress">
            <Progress {...progressProps} format="document" />
          </div>
        )}
      </div>
    )
  }
}
