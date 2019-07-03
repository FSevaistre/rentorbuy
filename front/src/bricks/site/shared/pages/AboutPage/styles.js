import styled from 'styled-components'

import { g, colors, breakpoints } from '../../../../core'

export const Steps = styled.section``

export const StepSeparation = styled.div`
  display: flex;
  position: absolute;
  top: ${g(1 / 2)};
  bottom: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${breakpoints.tablet}) {
    left: calc(50% - ${g(1)});
  }
`

export const StepSeparationDot = styled.div`
  flex: 0 0 ${g(2)};
  margin-bottom: ${g(1)};
  border-radius: 50%;
  width: ${g(2)};
  height: ${g(2)};

  background-color: ${({ field }) => {
    switch (field) {
      case 'loan':
        return colors.primary1.default
      case 'rate':
        return colors.accent1.default

      case 'experts':
        return colors.accent4.default
      case 'folder':
        return colors.accent1.default
      case 'negotiation':
        return colors.primary1.default
      case 'end':
        return colors.primary1.default
    }
  }};
`

export const StepSeparationLine = styled.div`
  flex: 1 1 100%;
  width: 2px;

  background: ${({ field }) => {
    switch (field) {
      case 'loan':
        return `linear-gradient(${colors.primary1.default}, ${colors.accent1.default})`
      case 'rate':
        return `linear-gradient(${colors.accent1.default}, ${colors.accent4.default})`
      case 'experts':
        return `linear-gradient(${colors.accent4.default}, ${colors.accent1.default})`
      case 'folder':
        return `linear-gradient(${colors.accent1.default}, ${colors.primary1.default})`
      case 'negotiation':
        return colors.primary1.default
    }
  }};
`

export const StepTitle = styled.div`
  margin-bottom: ${g(2)};
`

export const StepContent = styled.div`
  margin-bottom: ${g(3)};

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex: 0 0 50%;
  }
`

export const StepImage = styled.aside`
  margin: ${g(3)} auto 0;
  max-width: ${breakpoints.mobileL};
  width: 100%;

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex: 0 0 50%;
    margin: 0;
  }
`
export const EndImage = styled.div`
  max-width: ${breakpoints.mobileL};
`
export const StepText = styled.p``

export const Step = styled.div`
  position: relative;
  padding-bottom: ${g(7)};
  padding-left: ${g(5)};

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    padding-left: 0;

    &:nth-child(odd) {
      ${StepContent} {
        order: 1;
        padding-right: ${g(4)};
        text-align: right;
      }

      ${StepImage} {
        order: 2;
        padding-left: ${g(4)};
      }
    }

    &:nth-child(even) {
      ${StepContent} {
        order: 2;
        padding-left: ${g(4)};
      }

      ${StepImage} {
        order: 1;
        padding-right: ${g(4)};
        margin-left: auto;
      }
    }
  }

  &:last-child {
    display: flex;
    flex-direction: column;
    padding-top: ${g(5)};
    padding-left: 0;
    @media screen and (min-width: ${breakpoints.tablet}) {
      margin: auto;
      padding-top: 0;
      max-width: 420px;
    }

    ${StepImage} {
      @media screen and (min-width: ${breakpoints.tablet}) {
        display: none;
      }
    }

    ${StepTitle} {
      @media screen and (min-width: ${breakpoints.tablet}) {
        order: 1;
      }
    }

    ${StepSeparation} {
      @media screen and (min-width: ${breakpoints.tablet}) {
        display: none;
      }
    }

    ${StepContent} {
      display: flex;
      flex-direction: column;
      @media screen and (min-width: ${breakpoints.tablet}) {
        padding-left: 0;
      }

      ${EndImage} {
        @media screen and (min-width: ${breakpoints.tablet}) {
          order: 0;
        }

        img {
          max-width: 100%;
        }
      }
    }

    ${StepText} {
      order: 2;
    }

    ${StepImage} {
      display: none;

      @media screen and (min-width: ${breakpoints.tablet}) {
        display: block;
        order: 0;
        margin: 0 0 ${g(3)};
      }
    }
  }
`
