import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Text } from 'rebass'

import { NavContainer } from './styled'

const HorizontalNavbar = props => (
  <Flex
    as={NavContainer}
    collapse={1}
    justifyContent={['space-between']}
    py={4}
    fontSize={[0, 1, 2]}
    flexDirection={['row']}
  >
    {props.mainLinks.map(item => (
      <Box key={item.name}>
        <Link to={item.link}>
          <Text textAlign="center">{item.name}</Text>
        </Link>
      </Box>
    ))}
  </Flex>
)

export default HorizontalNavbar
