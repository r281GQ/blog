import React from 'react'
import { Link } from 'gatsby'
import propTypes from 'prop-types'
import { Box, Text, Flex } from 'rebass'

import { renderTagLink } from './functions'

const ArticleDetail = props => (
  <Box fontSize={0} flex="0.7">
    <Flex
      mb={4}
      flexWrap="wrap"
      lineHeight={2}
      textAlign="right"
      flexDirection={['row', 'row', 'row', 'column']}
      justifyContent="space-between"
      alignItems={['baseline', 'baseline', 'baseline', 'flex-end']}
      css={{ textAlign: 'right' }}
    >
      <Box mb={2}>
        <Text fontWeight="bold">Article</Text>
        <Text>{props.name}</Text>
      </Box>
      <Box my={2}>
        <Text fontWeight="bold">Published</Text>
        <Text>{props.date}</Text>
      </Box>
      <Box my={2}>
        <Text fontWeight="bold">Repo</Text>
        <Text>link</Text>
      </Box>
      <Box my={2}>
        <Text fontWeight="bold">Tags</Text>
        <Flex flexWrap="wrap" flexDirection="column">
          {props.tags.map(renderTagLink)}
        </Flex>
      </Box>
      <Box my={2}>
        <Text fontWeight="bold">Location</Text>
        <Text>{props.location}</Text>
      </Box>
      <Box my={2}>
        <Text fontWeight="bold">Share</Text>
        <Text>icons</Text>
      </Box>
      <Box my={2}>
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
