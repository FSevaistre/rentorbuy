import styled, { css } from 'styled-components'

import { g, colors, breakpoints } from '../../../../core'

export const TableDatacell = styled.td``
export const TableHead = styled.th`
  padding: 0;
  height: ${g(6)};
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  ${TableDatacell},
  ${TableHead} {
    padding-top: ${g(2)};
    padding-bottom: ${g(2)};
    width: 25%;
    vertical-align: middle;
    text-align: center;
    @media screen and (min-width: ${breakpoints.tablet}) {
      text-align: left;
    }

    &:first-child {
      padding-left: ${g(2)};
      width: 40%;
    }

    &:last-child {
      padding-right: ${g(2)};
      width: 10%;
      text-align: right;
    }
  }
`

export const TableRow = styled.tr`
  border: 1px solid ${colors.neutral1.fade(20)};
  border-right: 0;
  border-left: 0;
  width: 100%;
`
export const TableBody = styled.tbody`
  ${TableRow} {
    cursor: pointer;

    &:nth-child(odd) {
      background: ${colors.neutral1.light};
    }
  }
`

export const Cell = styled.div`
  ${({ type }) => {
    switch (type) {
      case 'bank':
        return css`
          img {
            display: block;
            margin: auto;
            width: ${g(5)};
            height: ${g(5)};
            @media screen and (min-width: ${breakpoints.tablet}) {
              display: inline-block;
              margin-right: ${g(3)};
              width: ${g(7)};
              height: ${g(7)};
              vertical-align: middle;
            }
          }

          div {
            text-align: center;
            @media screen and (min-width: ${breakpoints.tablet}) {
              display: inline-block;
              vertical-align: middle;
              text-align: left;
              font-size: ${g(2)};
            }
          }
        `
      case 'action':
        return css`
          display: block;
          @media screen and (min-width: ${breakpoints.tablet}) {
            display: inline-block;
            border-radius: 50%;
            background: $primary-1;
            width: ${g(6)};
            height: ${g(6)};
            text-align: center;
            line-height: ${g(6)};
            color: $white;
          }
        `

      default:
        return css`
          @media screen and (min-width: ${breakpoints.tablet}) {
            font-size: 20px;
          }
        `
    }
  }}
`

export const LogoBank = styled.div`
  margin: auto;
  width: ${g(5)};
  height: ${g(5)};
  border-radius: ${g(1)};
  overflow: hidden;
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: inline-block;
    margin-right: ${g(3)};
    width: ${g(7)};
    height: ${g(7)};
    vertical-align: middle;
  }
`
export const Nota = styled.div`
  text-align: right;
`
