import React from 'react'
import { Link } from 'gatsby'
import propTypes from 'prop-types'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'

import Collapseable from './../../../components/Collapseable'

import ArticleDetail from './ArticleDetail'

const ListItem = styled.li`
  ${props => {
    const fs = props.theme.fontSizes[0]
    const lh = props.theme.space[1]

    return `font-size: ${fs}px;
            line-height: ${lh}px;`
  }}

  list-style-type: none;
  text-align: right;
  text-transform: uppercase;
  font-weight: bold;
`

const RawNavLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

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

const FixWidth = styled.div`
  width: 150px;
`

const FixedPosition = styled.div`
  position: fixed;
  width: 100px;
`

const Sidebar = props => (
  <Flex as={Collapseable} collapse={1} flexDirection={['row', 'column']}>
    <Box p={3} as={FixWidth} />
    <Box fontSize={1} py={6} as={FixedPosition}>
      <NavLink mainLinks={props.mainLinks} />
      <ArticleDetail {...props.details} />
    </Box>
  </Flex>
)

Sidebar.propTypes = {
  mainLinks: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      link: propTypes.string.isRequired,
    })
  ),
  details: propTypes.shape({
    name: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    tags: propTypes.arrayOf(propTypes.string).isRequired,
  }),
}

export default Sidebar
