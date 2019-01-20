import React from 'react'
import { Box, Flex, Text } from 'rebass'

const NotReady = props => (
  <Flex
    justifyContent="center"
    flexDirection="column"
    flex="1"
    // css={{ minHeight: '100vh' }}
  >
    {/* <Flex justifyContent="center" flexDirection="row" flex="1"> */}
    <Text pt={6} fontSize={5} textAlign="center">
      {props.message}
    </Text>
    {/* </Flex> */}
  </Flex>
)

export default NotReady
