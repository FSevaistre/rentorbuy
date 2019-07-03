import React, { Fragment, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'

import * as S from './styles'

const CollapsibleRow = ({ childComponent: Child, component, in: inProps, parentComponent: Parent, ...props }) => {
  const [height, setHeight] = useState(inProps && 'appear' in props ? 'auto' : 0)
  const childRef = useRef(null)

  return (
    <Transition
      unmountOnExit
      in={inProps}
      onEntering={() => setHeight(childRef.current.clientHeight)}
      onEntered={() => setHeight('auto')}
      onExit={() => setHeight(childRef.current.clientHeight)}
      onExiting={node => {
        node.offsetTop // eslint-disable-line no-unused-expressions
        setHeight(0)
      }}
      timeout={500}
    >
      {state => (
        <Parent>
          <S.RowTransition isCollapsed={height === 0} style={{ height }}>
            <div ref={childRef}>
              <Child>{component}</Child>
            </div>
          </S.RowTransition>
        </Parent>
      )}
    </Transition>
  )
}

CollapsibleRow.defaultProps = {
  childComponent: Fragment,
  parentComponent: Fragment
}

export default CollapsibleRow
