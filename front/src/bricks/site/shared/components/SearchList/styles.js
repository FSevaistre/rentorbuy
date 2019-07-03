import styled from 'styled-components'

import { g, colors } from '../../../../core'

export const Title = styled.div``

export const Result = styled.div`
  margin-bottom: ${g(2)};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover ${Title} {
    color: ${colors['primary-1']};
  }

  a {
    display: block;

    &:focus {
      outline: 1px dashed ${colors['primary-1']};
    }
  }

  mark {
    background-color: ${colors.primary1.light};
    color: ${colors.primary1.default};
  }
`
export const ResultContent = styled.div`
  align-items: top;
  display: flex;
`

export const Image = styled.img`
  flex: 0 0 ${g(6)};
  border-radius: ${g(1)};
  height: ${g(6)};
  margin-right: ${g(3)};
`
