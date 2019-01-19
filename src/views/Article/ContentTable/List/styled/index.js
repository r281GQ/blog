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
  color: ${props => props.theme.colors.text};
  border-bottom: ${props =>
    props.main
      ? `1px solid ${props.theme.colors.text}`
      : `1px solid ${props.theme.colors.textAlternate}`};
`

ContentLink.propTypes = {
  main: propTypes.bool,
}

export { ContentLink, Ol }
