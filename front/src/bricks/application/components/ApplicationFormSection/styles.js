import styled from 'styled-components'

import { g, tablet } from '../../../core'

export const Description = styled.div`
  margin-bottom: ${g(4)};

  @media only screen and (min-width: ${tablet.min}) {
    margin-bottom: ${g(6)};
  }
`

export const FieldParent = styled.div``

export const FieldChild = styled.div`
  ${FieldParent} + ${FieldParent} & {
    padding-top: ${g(3)};

    @media only screen and (min-width: ${tablet.min}) {
      padding-top: ${g(4)};
    }
  }
`

export const Helper = styled.div`
  margin-bottom: ${g(4)};

  @media only screen and (min-width: ${tablet.min}) {
    margin-bottom: 0;
    position: absolute;
    right: 0;
    width: ${100 / 3}%;
  }
`

export const HelperButton = styled.div`
  margin-top: ${g(2)};

  @media only screen and (min-width: ${tablet.min}) {
    margin-top: ${g(3)};
  }
`

export const Section = styled.section`
  position: relative;
`

export const SectionContent = styled.div`
  @media only screen and (min-width: ${tablet.min}) {
    width: 60%;
  }
`

export const SectionTitle = styled.div`
  margin-bottom: ${({ hasShortSpacing }) => g(hasShortSpacing ? 2 : 4)};

  @media only screen and (min-width: ${tablet.min}) {
    margin-bottom: ${({ hasShortSpacing }) => g(hasShortSpacing ? 2 : 6)};
  }
`
