import styled from 'styled-components'
import { g, colors } from '../../bricks/core'

export const Divider = styled.div`
  text-align: center;
  margin: ${g(2)};
  position: relative;
  /* background: ${colors.white}; */

  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 1px;
    width: 40%;
    top: 50%;
    background: ${colors.neutral1.fade(20)};
  }

  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
`
