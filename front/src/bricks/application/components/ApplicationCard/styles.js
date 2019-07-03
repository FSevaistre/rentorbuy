import btoa from 'btoa-lite'
import styled, { css } from 'styled-components'

import { colors, g, tablet } from '../../../core'

export const Card = styled.div`
  background-color: ${colors.white};
  border: none;
  overflow: hidden;

  @media only screen and (min-width: ${tablet.min}) {
    border: 1px solid ${colors.neutral1.fade(20)};
    border-radius: ${g(1)};
  }
`

export const Label = styled.div`
  align-items: center;
  display: flex;
`

export const LabelIcon = styled.div`
  margin-right: ${g(2)};
`

export const Action = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  ${Label} + & {
    margin-top: ${g(1)};

    @media only screen and (min-width: ${tablet.min}) {
      margin-top: 0;
    }
  }
`

export const ActionIcon = styled.div`
  margin-left: ${g(2)};
`

export const ActionLabel = styled.div`
  text-transform: uppercase;
`

export const AlertError = styled.div`
  background-color: ${colors.errorState.light};
`

export const Alert = styled(AlertError)`
  background-color: ${colors.accent1.light};
  position: relative;

  &:before {
    background-image: url('data:image/svg+xml;base64,${btoa(
      `<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><polygon fill="${
        colors.accent1.light
      }" points="12 0 24 8 0 8"></polygon></svg>`
    )}');
    background-repeat: no-repeat;
    background-size: 100%;
    bottom: 100%;
    content: '';
    height: ${g(1)};
    position: absolute;
    right: ${g(7)};
    width: ${g(3)};
  }
`

export const Content = styled.div`
  padding: ${g(2)};

  @media only screen and (min-width: ${tablet.min}) {
    padding: ${g(1.5)} ${g(3)};
  }
`

export const Row = styled.div`
  box-sizing: content-box;
  padding: ${g(2)};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.3;
    `}

  @media only screen and (min-width: ${tablet.min}) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    min-height: ${g(4)};
    padding: ${g(2)} ${g(3)};
  }
`

export const Title = styled.div`
  padding: ${g(2)} ${g(2)} ${g(1)};

  @media only screen and (min-width: ${tablet.min}) {
    padding: ${g(3)} ${g(3)} ${g(1)};
  }
`
