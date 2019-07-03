import styled, { css } from 'styled-components'

import { colors, g } from '../../../../core'

export default styled.ul`
  counter-reset: section;

  & > li + li {
    margin-top: ${g(2)};
  }

  & > li {
    padding-left: ${g(3)};
    position: relative;

    &:before {
      ${({ as }) => {
        if (as === 'ol') {
          return css`
            color: ${colors.primary1.default};
            content: counters(section,".") ". ";
            counter-increment: section;
            font-weight: bold;
            left: 0;
            position: absolute;
          `
        }

        return css`
          background-color: ${colors.primary1.default};
          content: '';
          border-radius: ${g(1 / 2)};
          display: block;
          height: ${g(1)};
          left: 0;
          position: absolute;
          top: ${g(1)};
          width: ${g(1)};
        `
      }}
    }
  }
`
