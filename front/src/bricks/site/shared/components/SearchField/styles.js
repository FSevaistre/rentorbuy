import styled from 'styled-components'

import { g } from '../../../../core'

export const Button = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: ${g(5)};

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: inherit;
    height: 100%;
    width: inherit;

    &:focus {
      outline: 0px transparent;
    }
  }
`

export const Content = styled.div`
  display: flex;
  padding: ${g(1)} ${g(2)} ${g(1)};
`

export const Label = styled.div`
  height: 0;
  position: absolute;
  top: -9999px;
`

export const Input = styled.div`
  flex-grow: 1;
  margin-right: ${g(2)};
`
