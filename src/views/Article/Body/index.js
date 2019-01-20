import React from 'react'
import { Box, Flex, Text } from 'rebass'

import Hyphens from './../../../components/Hyphens'

import ContentTable from './../ContentTable'

const Body = props => (
  <Flex
    flex="1 1 0"
    flexDirection={['column', 'column', 'row-reverse']}
    justifyContent="space-between"
  >
    <ContentTable list={props.links} />
    <Box css={{ maxWidth: '800px' }} pr={[2, 2, 4, 6]} py={4} pl={[2, 2, 0, 0]}>
      <Text as={Hyphens} fontFamily="Muli" fontSize={1} lineHeight={1.6}>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </Text>
    </Box>
  </Flex>
)

export default Body
