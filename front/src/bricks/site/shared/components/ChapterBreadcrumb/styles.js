import styled, { css } from 'styled-components'

import { colors, g, breakpoints } from '../../../../core'

const fragment = pseudo => css`
  &:${pseudo} {
    background-color: ${({ variant }) => colors[variant]};
    content: '';
    display: block;
    pointer-events: none;
    transform: scaleY(${({ current }) => (current ? 1 : 0.75)});
    transform-origin: center top;
    transition: transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
    width: ${g(1 / 4)};
  }
`

export const Item = styled.div`
  align-items: stretch;
  backface-visibility: hidden;
  display: flex;
  outline: 0px transparent;
  position: relative;
  transform: translateX(calc(100% - ${g(2)}));
  transform-origin: left center;
  transition: transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1);

  & > & {
    color: ${({ variant }) => colors[variant]};
    position: absolute;
    right: 100%;
    top: 0;
    z-index: -1;

    ${({ current }) =>
      current &&
      css`
        transform: translateX(0px);
      `}
  }

  ${({ variant }) => variant && fragment('before')}
`

export const Items = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  overflow: hidden;
`

export const Breadcrumb = styled.div`
  align-items: stretch;
  display: flex;
  transform: translateY(-100%) rotate(-90deg);
  transform-origin: right bottom;

  left: 0;
  position: absolute;
  right: ${g(2.5)};
  top: 0;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    right: calc(100vw - ${breakpoints.desktop} - ((100vw - ${breakpoints.desktop}) / 2) + ${g(2.5)});
  }

  ${fragment('after')}

  ${Items} > ${Item} {
    color: ${({ variant }) => colors[variant]};

    ${({ current }) =>
      current &&
      css`
        transform: translateX(0px);
      `}
  }
`

export const Label = styled.div`
  background-color: ${colors.white};
  font-size: ${g(1 * 1.5)};
  letter-spacing: 0.1px;
  line-height: ${g(4)};
  margin-right: ${g(-1 / 4)};
  outline: 0px transparent;
  padding: 0 ${g(2)} 0 ${g(4)};
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
`
