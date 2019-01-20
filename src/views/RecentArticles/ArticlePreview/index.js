import React from 'react'
import propTypes from 'prop-types'
import { Box, Image, Flex, Text } from 'rebass'

const Preview = props => (
  <Box my={3} fontSize={0}>
    <Flex>
      <Box flex="1 1 1">
        <Image src={props.image} />
      </Box>
      <Box pl={3}>
        <Text fontWeight="bold">
          {props.title}{' '}
          <span style={{ fontWeight: 'lighter', color: '#dedede' }}>
            {props.date}
          </span>
        </Text>
        <Text mt={2} fontFamily="Muli">
          {props.excerpt}
        </Text>
      </Box>
    </Flex>
  </Box>
)

Preview.propTypes = {
  title: propTypes.string.isRequired,
  excerpt: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
}

export default Preview
