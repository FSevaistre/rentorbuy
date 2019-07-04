import styled from 'styled-components'
import { g, colors } from '../../bricks/core'

export const Graph = styled.div`
  display: flex;
  justify-content: center;
  padding: ${g(2)};
`
export const Equilibrium = styled.p`
  text-align: center;
  margin: ${g(2)};
`

export const Sections = styled.div`
  /* display: flex;
  justify-content: space-evenly;
  margin-bottom: ${g(5)}; */
  display: grid;
    grid-template-columns: 1fr 1fr;
    margin: ${g(4)} auto;
    width: ${g(120)};
    grid-gap: ${g(4)};
`
export const Section = styled.div`
  padding: ${g(2)};
  background: ${colors.neutral1.light};
  border-radius: ${g(1)};
`

export const Divider = styled.div`
  margin: ${g(1)} 0 ${g(2)};
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${g(6)};
`
