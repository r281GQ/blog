import React from 'react'
import { Flex, Text } from 'rebass'

const NotReady = props => (
  <Flex justifyContent="center" flexDirection="column" flex="1">
    <Text pt={6} fontSize={5} textAlign="center">
      {props.message}
    </Text>
  </Flex>
)

export default NotReady
