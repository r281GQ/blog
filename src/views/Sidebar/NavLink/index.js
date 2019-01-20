import React from 'react'
import propTypes from 'prop-types'
import { Box } from 'rebass'

import { ListItem, RawNavLink } from './styled'

const NavLinkElement = props => (
  <Box as={ListItem} my={3}>
    <RawNavLink to={props.link}>{props.name}</RawNavLink>
  </Box>
)

const NavLink = props => (
  <ul>
    {props.mainLinks.map(link => (
      <NavLinkElement key={link.name} {...link} />
    ))}
  </ul>
)

NavLink.propTypes = {
  mainLinks: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      link: propTypes.string.isRequired,
    })
  ),
}

export default NavLink
