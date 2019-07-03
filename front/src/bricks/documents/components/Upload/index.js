import classnames from 'classnames'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import PropTypes from 'prop-types'
import { Button, Card, Content, Mobile, Desktop, Text } from '../../../index'

import './Upload.scss'

const Upload = ({ onUpload, withRequirements }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: '.jpg, .jpeg, .png, .gif, .tiff, .tif, .bmp, .pdf',
    onDrop: onUpload
  })

  const handleUpload = event => onUpload([...event.target.files], [], event)

  return (
    <div>
      <Mobile>
        <div className={classnames('upload', { 'upload--active': isDragActive })}>
          <Button format={['large', 'shadow']} icon="upload" iconSize="large">
            <input
              type="file"
              name="upload"
              accept=".jpg, .jpeg, .png, .gif, .tiff, .tif, .bmp, .pdf"
              multiple
              onChange={handleUpload}
            />
            choisir et envoyer
          </Button>
        </div>
      </Mobile>
      <Desktop>
        <div {...getRootProps()} className="upload">
          <input {...getInputProps()} />

          <Card variant="white">
            <Content>
              <div className="upload--content">
                <div className="upload--content--label">
                  <strong>Glissez & déposez</strong> vos documents
                  <br /> ou <strong>cliquez pour choisir.</strong>
                  {withRequirements && (
                    <div className="upload--content--requirements">
                      <Text size="small" variant="neutral-1-60">
                        Fichiers acceptés : JPG et PDF. Maximum 25 mo.
                      </Text>
                    </div>
                  )}
                </div>

                <div className="upload--content--button">
                  <Button format="circle" icon="upload" />
                </div>
              </div>
            </Content>
          </Card>
        </div>
      </Desktop>
    </div>
  )
}

Upload.defaultProps = {
  withRequirements: false
}

Upload.propTypes = {
  /** onUpload function. Returns uploaded files as arg. */
  onUpload: PropTypes.func,
  /** Whether ot not the requirements are mentioned. */
  withRequirements: PropTypes.bool
}

export default Upload
