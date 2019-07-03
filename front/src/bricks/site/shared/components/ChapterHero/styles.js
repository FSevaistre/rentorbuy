import styled from 'styled-components'

import { colors, g, tablet } from '../../../../core'

export const Hero = styled.div`
  align-items: center;
  background-color: ${({ variant }) => colors[variant]};
  display: flex;
  color: ${colors.white};
  flex-direction: column;
  padding: ${g(3)} ${g(2)};
  text-align: center;

  @media only screen and (min-width: ${tablet.min}) {
    padding: ${g(8)} ${g(27)};
  }
`

export const ID = styled.div`
  border-bottom: ${g(1 / 4)} solid ${colors.white};
  margin-bottom: ${g(4)};
  text-transform: uppercase;
`
