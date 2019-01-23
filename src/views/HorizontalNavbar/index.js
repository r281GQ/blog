import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex } from 'rebass'

import { NavContainer } from './styled'

const HorizontalNavbar = props => (
  <Flex
    as={NavContainer}
    collapse={1}
    justifyContent="center"
    py={4}
    fontSize={[1, 2]}
    flexDirection={['row']}
  >
    {props.mainLinks.map(item => (
      <Box key={item.name} mr={3}>
        <Link to={item.link}>{item.name}</Link>
      </Box>
    ))}
  </Flex>
)

export default HorizontalNavbar
