// import React, { memo, useState } from 'react'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const SearchField = props => {
  // const [focus, setFocus] = useState(false)

  // const onBlur = () => setFocus(false)
  // const onFocus = () => setFocus(true)

  return (
    <B.Card variant="white" zDepth={2}>
      <S.Content>
        <S.Label>
          <label htmlFor="search">Rechercher dans le guide</label>
        </S.Label>

        <S.Input>
          <B.TextField {...props} format="search" id="search" placeholder="Rechercher dans le guide" type="search" />
        </S.Input>

        <S.Button>
          <button>
            <B.Icon name="search" />
          </button>
        </S.Button>
      </S.Content>
    </B.Card>
  )
}

SearchField.propTypes = {}

export default memo(SearchField)
