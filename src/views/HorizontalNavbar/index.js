import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex } from 'rebass'

import { NavContainer } from './styled'

const HorizontalNavbar = props => (
  <Flex
    as={NavContainer}
    collapse={1}
    py={4}
    flexDirection={['row', 'row', 'column']}
  >
    {props.mainLinks.map(item => (
      <Box key={item.name} mr={3}>
        <Link to={item.link}>{item.name.toUpperCase()}</Link>
      </Box>
    ))}
  </Flex>
)

export default HorizontalNavbar
