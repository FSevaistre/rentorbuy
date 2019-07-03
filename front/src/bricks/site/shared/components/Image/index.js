import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import React, { Fragment, memo, useEffect, useState, useRef } from 'react'
import { observer } from '../../../utility/observer'
import { useWebpSupport } from '../../../../assets/hooks'
import * as B from '../../../../index'
import * as S from './styles'

const URL_BASE = 'https://res.cloudinary.com/pretto-fr/image/upload/'

const markdownOptions = {
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

const Image = ({ caption, description, fitsToContent, slug, full, options, isImg }) => {
  const [isLoaded, setLoaded] = useState(false)
  const [isVisible, setVisible] = useState(false)
  const defaultSrc =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAEBAMAAABFFrP+AAAAJ1BMVEU1rng6sHqR07U8sXxfv5Sj2sF2yKOV1bhJtoWe2L6v38nL6tyP0rQL9yOIAAAAIUlEQVQI12OQYGAWYGBwnXZ02WEG9yObamYwCBoYCBoAAEswBriYvfYVAAAAAElFTkSuQmCC'
  const [src, setSrc] = useState(defaultSrc)
  const containerRef = useRef(null)
  const ext = useWebpSupport('')

  if (containerRef.current && typeof window !== 'undefined') {
    const target = containerRef.current
    observer.observe(target)
  }

  const BASE_SRC = `${URL_BASE}${options ? `${options}/` : ''}${slug}`

  useEffect(() => {
    const newSrc = `${BASE_SRC}`
    setSrc(newSrc)
    setVisible(true)
  }, [])

  const handleLoad = () => setLoaded(true)

  const alt = description || caption || slug

  const imgSrc = `${src}${ext}`

  const noScriptImage = (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<img alt="${alt}" src="${BASE_SRC}${ext}" />`
      }}
    />
  )

  return (
    <S.Figure ref={containerRef} isImg={isImg} isVisible={isVisible}>
      {isImg ? (
        <Fragment>
          {isVisible && <S.Img src={defaultSrc} data-src={imgSrc} alt={alt} className="imageWithSrc" />}

          {noScriptImage}
        </Fragment>
      ) : !fitsToContent ? (
        <Fragment>
          <S.SizedImage
            style={{ backgroundImage: `url('${defaultSrc}')` }}
            full={full}
            className="imageWithBackground"
            src={defaultSrc}
            data-src={imgSrc}
          />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `<div style="background-image: url('${BASE_SRC}${ext}');position: absolute;top: 0;right: 0;bottom: 0;left: 0;background-size: cover;"></div>`
            }}
          />
        </Fragment>
      ) : (
        <S.Image full={full} isLoaded={isLoaded}>
          {isVisible && (
            <img alt={alt} onLoad={handleLoad} src={defaultSrc} data-src={imgSrc} className="imageWithSrc" />
          )}

          {noScriptImage}
        </S.Image>
      )}

      {caption && (
        <S.Caption>
          <B.Text size="small" variant="neutral-1-60">
            <Markdown options={markdownOptions}>{caption}</Markdown>
          </B.Text>
        </S.Caption>
      )}
    </S.Figure>
  )
}

Image.defaultProps = {
  caption: '',
  description: '',
  fitsToContent: false,
  full: true
}

Image.propTypes = {
  /** Piece of text that goes below the image.*/
  caption: PropTypes.string,
  /** Alternative description of the image. Ignored if caption is specified. */
  description: PropTypes.string,
  /** Alternative text of image. */
  alt: PropTypes.string,
  /** If set to true, the image size determines the aspect ratio of the component. */
  fitsToContent: PropTypes.bool,
  /** Slug of the image. */
  slug: PropTypes.string.isRequired,
  /** Whether the image should be as large as the container, or at 50%. */
  full: PropTypes.bool,
  /** Options of image as props in cloudinary url (eg: `c_fill,w_740`) */
  options: PropTypes.string,
  /** Whether it should render an <img> tag or not. */
  isImg: PropTypes.bool
}

export default memo(Image)
