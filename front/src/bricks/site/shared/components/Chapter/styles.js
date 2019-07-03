import styled from 'styled-components'

import { colors, g } from '../../../../core'

export const Body = styled.div`
  border: 1px solid ${colors.neutral1.fade(20)};
  border-top: 0;
  border-radius: 0px 0px ${g(1 / 2)} ${g(1 / 2)};
  flex-grow: 1;
  padding: ${g(3)};
`

export const Description = styled.div`
  margin-bottom: ${g(2)};
`

export const Chapter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ChapterID = styled.div`
  text-transform: uppercase;
`

export const Divider = styled.div`
  background-color: ${({ variant }) => colors[variant]};
  height: 1px;
  width: ${g(5)};
`

export const Head = styled.div`
  background-color: ${({ variant }) => colors[variant]};
  border-radius: ${g(1 / 2)} ${g(1 / 2)} 0px 0px;
  color: ${colors.white};
  padding: ${g(3)};
`

export const HeadTitle = styled.div`
  margin-top: ${g(2)};
`

export const Topic = styled.div`
  display: block;

  a {
    color: ${colors.neutral1.default};
    transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:focus,
    &:hover {
      color: ${({ variant }) => colors[variant]};
      outline: 0px transparent;
    }
  }

  & + & {
    margin-top: ${g(2 + 1 / 2)};
  }
`

export const Topics = styled.div`
  margin-top: ${g(2)};
`
