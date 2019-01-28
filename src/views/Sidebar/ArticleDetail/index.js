import React from 'react'
import { Link } from 'gatsby'
import propTypes from 'prop-types'
import { Box, Text, Flex } from 'rebass'

import { renderTagLink } from './functions'

import { Collapseable } from './../../../components/Collapseable'

const ArticleDetail = props => (
  <Box fontSize={0} flex="0.7">
    <Flex
      mb={[1, 4]}
      lineHeight={2}
      textAlign="right"
      flexDirection={['column', 'row', 'row', 'column', 'column']}
      alignItems={['center', 'baseline', 'baseline', 'center']}
      fontSize={[0]}
      css={{ textAlign: 'center', width: '100%' }}
    >
      <Box collapse={1} as={Collapseable} reverse mb={2} flex="1 0 auto">
        <Text fontWeight="bold">Article</Text>
        <Text>{props.name}</Text>
      </Box>
      <Box collapse={1} as={Collapseable} reverse my={2} flex="1 1 auto">
        <Text fontWeight="bold" width="100%">
          Published
        </Text>
        <Text>{props.date}</Text>
      </Box>
      <Flex
        my={[0, 2]}
        justifyContent="center"
        flexDirection={['column']}
        flex="1 1 auto"
      >
        <Text fontWeight="bold">Repo</Text>
        <Text>link</Text>
      </Flex>
      <Flex
        my={[2]}
        justifyContent="center"
        flexDirection={['column']}
        flex="1 1 auto"
      >
        <Text fontWeight="bold">Tags</Text>
        <Flex flexDirection="column">
          {props.tags.map(renderTagLink(true))}
        </Flex>
      </Flex>
      <Box collapse={1} as={Collapseable} reverse my={2} flex="1 1 auto">
        <Text fontWeight="bold">Location</Text>
        <Text>{props.location}</Text>
      </Box>
      <Flex
        my={[0, 2]}
        flexDirection={['column']}
        justifyContent="center"
        flex="1 1 auto"
      >
        <Text fontWeight="bold">Share</Text>
        <Text>icons</Text>
      </Flex>
      <Box collapse={1} as={Collapseable} reverse my={2} flex="1 1 auto">
        <Text fontWeight="bold">You can also read it on</Text>
        <Link to="">
          <Text>icons</Text>
        </Link>
      </Box>
    </Flex>
  </Box>
)

ArticleDetail.propTypes = {
  name: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string).isRequired,
}

export default ArticleDetail
