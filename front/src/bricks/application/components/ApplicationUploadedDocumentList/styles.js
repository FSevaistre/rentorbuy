import styled from 'styled-components'

import { colors, g, tablet } from '../../../core'

export const Documents = styled.div`
  border-bottom: 1px solid ${colors.neutral1.fade(20)};
  border-top: 1px solid ${colors.neutral1.fade(20)};

  @media only screen and (min-width: ${tablet.min}) {
    border: 1px solid ${colors.neutral1.fade(20)};
    border-radius: ${g(1 / 2)};
  }
`

export const Error = styled.div`
  @media screen and (min-width: ${tablet.min}) {
    margin-bottom: ${g(2)};
  }
`

export const NoDocuments = styled.div`
  border-bottom: 1px solid ${colors.neutral1.fade(20)};
  border-top: 1px solid ${colors.neutral1.fade(20)};
  border-radius: ${g(1 / 2)};
  text-align: center;

  @media screen and (min-width: ${tablet.min}) {
    border: 1px solid ${colors.neutral1.fade(20)};
    border-radius: ${g(1 / 2)};
  }
`

export const UploadedDocument = styled.div`
  & + & {
    border-top: 1px solid ${colors.neutral1.fade(20)};
  }
`
