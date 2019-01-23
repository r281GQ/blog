import React from 'react'
import propTypes from 'prop-types'
import { Box, Flex, Text } from 'rebass'

const Preview = props => (
  <Box my={4} fontSize={0}>
    <Flex>
      <Box pl={[0, 3]} flex="1">
        <Text fontWeight="bold">{props.title}</Text>
        <Flex justifyContent="space-between">
          <Text fontWeight="lighter"> {props.date} </Text>
          <Text fontWeight="lighter"> {props.tags} </Text>
        </Flex>
        <Text mt={2} fontFamily="Muli">
          <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
        </Text>
      </Box>
    </Flex>
  </Box>
)

Preview.propTypes = {
  title: propTypes.string.isRequired,
  excerpt: propTypes.string.isRequired,
  date: propTypes.number.isRequired,
  cover: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
}

export default Preview
