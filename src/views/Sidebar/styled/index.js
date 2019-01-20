import styled from 'styled-components'

const FixWidth = styled.div`
  width: 150px;
`

const FixedPosition = styled.div`
  position: fixed;
  width: 150px;

  display: none;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoints[props.collapse]}) {
    display: inherit;
  }
`

export { FixWidth, FixedPosition }
