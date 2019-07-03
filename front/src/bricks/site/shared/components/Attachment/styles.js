import styled from 'styled-components'

import { g, helpers } from '../../../../core'

export const Attachment = styled.a`
  border-radius: ${g(2)};
  display: block;
  transition: box-shadow 300ms ease-in-out;

  &:focus,
  &:hover {
    ${helpers.boxShadow(2)}
    outline: 0px transparent;
  }
`

export const Content = styled.div`
  align-items: center;
  display: flex;
`

export const Icon = styled.div`
  margin-right: ${g(3)};
`

export const Title = styled.div`
  flex-grow: 1;
  margin-right: ${g(3)};
`
