import React from 'react'
import propTypes from 'prop-types'
import { Box, Text } from 'rebass'

import { renderTagLink } from './functions'

const ArticleDetail = props => (
  <Box fontSize={0} mt={5}>
    <Text lineHeight={2} textAlign="right">
      <Box my={2}>
        <Text fontWeight="bold">Article</Text>
        <Text>{props.name}</Text>
      </Box>
      <Box my={2}>
        <Text fontWeight="bold">Published</Text>
        <Text>{props.date}</Text>
      </Box>
      <Box my={2}>
        <Text fontWeight="bold">Tags</Text>
        {props.tags.map(renderTagLink)}
      </Box>
      <Box my={2}>
        <Text fontWeight="bold">Location</Text>
        <Text>{props.location}</Text>
      </Box>
    </Text>
  </Box>
)

ArticleDetail.propTypes = {
  name: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string).isRequired,
}

export default ArticleDetail
