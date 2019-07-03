import styled, { css } from 'styled-components'

import { colors, g, tablet } from '../../../../core'

export const NumeralStep = styled.div`
  background-color: ${colors.accent1.default};
  border-radius: ${g(2)};
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: ${g(4)};
  justify-content: center;
  margin: -3px ${g(2)} 0 ${g(-2 - 1 / 4)};
  width: ${g(4)};

  @media screen and (min-width: ${tablet.min}) {
    border-radius: ${g(7 / 2)};
    height: ${g(7)};
    margin: ${g(-7 / 2 - 1 / 4)} 0 ${g(3)} ${g(-7 / 2)};
    width: ${g(7)};
  }
`

export const StepItem = styled.div`
  display: flex;
  border-left: ${g(1 / 2)} solid transparent;

  &:not(:last-child) {
    border-color: ${colors.accent1.default};
    padding-bottom: ${g(3)};

    @media screen and (min-width: ${tablet.min}) {
      padding-bottom: 0;
    }
  }

  @media screen and (min-width: ${tablet.min}) {
    border-left: none;
    border-top: ${g(1 / 2)} solid transparent;
    display: block;
    padding: 0 ${g(3)};

    ${({ length }) => css`
      flex-basis: ${100 / length}%;
      max-width: ${100 / length}%;
    `}
  }
`

export const StepTitle = styled.div`
  margin-bottom: ${g(2)};
`

export const Steps = styled.div`
  padding: 0 ${g(2)} 0 ${g(4 - 1 / 4)};

  @media only screen and (min-width: ${tablet.min}) {
    display: flex;
    padding: ${g(7 / 2 + 1 / 4)} 0 0;
  }
`
