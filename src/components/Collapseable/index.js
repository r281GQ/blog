import propTypes from 'prop-types'
import styled from 'styled-components'

const Collapseable = styled.div`
  display: none;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoints[props.collapse]}) {
    display: ${props => (props.x ? `unset` : `inherit`)};
  }
`

Collapseable.propTypes = {
  collapse: propTypes.number,
}

Collapseable.defaultProps = {
  collapse: 1,
}

export { Collapseable }
