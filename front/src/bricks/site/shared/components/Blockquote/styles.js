import styled, { css } from 'styled-components'

import { colors, g, tablet } from '../../../../core'

export const Badge = styled.div`
  align-items: center;
  background-image: url('https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1554202660/website/content/blockquote_badge-${({
    badgeType
  }) => badgeType}.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  border: ${g(1 / 2)} solid ${colors.white};
  border-radius: ${g(4)};
  display: flex;
  height: ${g(8)};
  justify-content: center;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: ${g(8)};

  @media only screen and (min-width: ${tablet.min}) {
    left: ${g(-4)};
    right: auto;
  }
`

export const Blockquote = styled.div`
  position: relative;

  ${({ hasBadge }) =>
    hasBadge &&
    css`
      padding-top: ${g(4)};
    `}
`

export const Cite = styled.div`
  margin-top: ${g(3)};
`

export const Content = styled.div`
  padding: ${g(2)};

  @media only screen and (min-width: ${tablet.min}) {
    padding: ${g(2)} ${g(3)};
  }

  ${({ hasOffset }) =>
    hasOffset &&
    css`
      padding: ${g(6)} ${g(2)} ${g(2)};

      @media only screen and (min-width: ${tablet.min}) {
        padding: ${g(2)} ${g(7)};
      }
    `}
`

export const Quote = styled.blockquote`
  & > * + * {
    margin-top: ${g(2)};
  }
`

export const Title = styled.div`
  margin-bottom: ${g(2)};
`
