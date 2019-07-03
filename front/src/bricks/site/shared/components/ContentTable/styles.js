import styled from 'styled-components'

import { colors, g, tablet } from '../../../../core'

export const Content = styled.div`
  overflow: auto;
`

export const Body = styled.tbody``

export const Head = styled.thead``

export const Foot = styled.tfoot``

export const Row = styled.tr`
  &:nth-child(2n + 1) { background-color: ${colors.white}; }

  ${Foot} &,
  ${Head} &,
  &:nth-child(2n) { background-color: ${colors.neutral1.light}; }
`

export const Table = styled.table`
  border: 1px solid ${colors.neutral1.fade(20)};
  border-collapse: separate;
  border-radius: ${g(1)};
  overflow: hidden;
  width: 100%;
`

export const Cell = styled.td`
  padding: ${g(1)} ${g(3)};
  text-align: left;

  ${Head} &,
  ${Foot} & { padding: ${g(2)} ${g(3)}; }

  ${Body} ${Row} + ${Row} > & { border-top: 1px solid ${colors.neutral1.fade(20)}; }
  ${Head} ${Row}:last-child > & { border-bottom: 2px solid ${colors.neutral1.fade(20)}; }
  ${Foot} ${Row}:first-child > & { border-top: 2px solid ${colors.neutral1.fade(20)}; }

  ${Table} > ${Body}:last-child ${Row}:last-child > &:first-child,
  ${Table} > ${Foot}:last-child ${Row}:last-child > &:first-child { border-bottom-left-radius: ${g(1)}; }

  ${Table} > ${Body}:last-child ${Row}:last-child > &:last-child,
  ${Table} > ${Foot}:last-child ${Row}:last-child > &:last-child { border-bottom-right-radius: ${g(1)}; }

  & > * + * {
    margin-top: ${g(2)};
  }
`

export const HeadCell = styled(Cell)`
  font-weight: 600;
  ${({ hasRightBorder }) => hasRightBorder && `border-right: 1px solid ${colors.neutral1.fade(20)};`}
`

export const Title = styled.caption`
  caption-side: bottom;
  font-style: italic;
  margin-top: ${g(1)};
  text-align: left;

  @media screen and (min-width: ${tablet.min}) {
    padding: 0 ${g(3)};
  }

  a {
    text-decoration: underline;

    &:focus,
    &:hover {
      outline: 0px transparent;
      text-decoration: none;
    }
  }
`
