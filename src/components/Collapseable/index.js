import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const Collapseable = styled(
  ({ collapese, reverse, alignItems, flexDirection, ...rest }) => (
    <div {...rest} />
  )
)`
  display: none;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoints[props.collapse]}) {
    display: ${props => (props.reverse ? `unset` : `inherit`)};
  }
`

Collapseable.propTypes = {
  collapse: propTypes.number,
  reverse: propTypes.bool,
}

Collapseable.defaultProps = {
  collapse: 1,
  reverse: false,
}

export { Collapseable }
