import styled from 'styled-components'

export default styled.div`
  visibility: collapse;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoints[props.collapse]}) {
    visibility: inherit;
  }
`
