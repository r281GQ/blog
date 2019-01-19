import React from 'react'
import { Link } from 'gatsby'
import propTypes from 'prop-types'
import styled from 'styled-components'

const Ol = styled.ol`
  ${props =>
    props.main ? `list-style-type: decimal;` : `list-style-type: lower-latin;`}
`

const ContentLink = styled(({ main, ...rest }) => <Link {...rest} />)`
  text-decoration: none;
  color: #303030;
  border-bottom: ${props =>
    props.main ? '1px solid #303030' : '1px solid #dedede'};
`

ContentLink.propTypes = {
  main: propTypes.bool.isRequired,
}

export { ContentLink, Ol }
