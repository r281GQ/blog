import styled from 'styled-components'

export const Split = styled.div`
  max-width: none;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoints[props.value ? props.value : 0]}) {
    max-width: ${props => props.maxWidth}px;
  }
`
