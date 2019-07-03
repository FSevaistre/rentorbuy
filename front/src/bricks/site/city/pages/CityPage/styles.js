import styled from 'styled-components'

import { g, colors, breakpoints } from '../../../../core'

export const Section = styled.section`
  padding: ${g(4)} 0;

  &:nth-child(odd) {
    background-color: ${colors.neutral1.light};
  }
`

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: ${g(4)};
`

export const Map = styled.div`
  position: relative;
  height: ${g(25)};
  overflow: hidden;
  @media screen and (min-width: ${breakpoints.tablet}) {
    height: ${g(34)};
  }
`
