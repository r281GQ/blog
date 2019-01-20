import propTypes from 'prop-types'
import styled from 'styled-components'

const NavContainer = styled.div`
  display: inherit;
  order: 0;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoints[props.collapse]}) {
    display: none;
  }
`

NavContainer.propTypes = {
  collapse: propTypes.number,
}

export { NavContainer }
