import katex from 'katex'
import React, { Fragment } from 'react'

import { Container, GlobalStyle } from './styles'

const renderLatex = source => {
  try {
    return katex.renderToString(source, {
      displayMode: true,
      throwOnError: false,
      strict: false
    })
  } catch (error) {
    return source
  }
}

const Latex = ({ children }) => (
  <Fragment>
    <GlobalStyle />

    <Container>
      <div
        dangerouslySetInnerHTML={{
          __html: renderLatex(children)
        }}
      />
    </Container>
  </Fragment>
)

export default Latex
