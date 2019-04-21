import React from 'react'
import propTypes from 'prop-types'
import { Box, Text, Flex } from 'rebass'

import Youtube from './../Youtube'

const Videos = props => (
  <Box maxWidth={600} px={3}>
    <Text fontSize={3} my={4}>
      {props.title.toLowerCase()}
    </Text>
    <Box>
      {props.videos.map(renderProps => (
        <Box
          key={renderProps.title}
          my={4}
          fontSize={0}
          css={{ maxWidth: 500 }}
        >
          <Flex flexDirection={['column']}>
            <Box pl={[0, 3]} flex="1 1 0">
              <Text fontWeight="bold">{renderProps.title}</Text>
              <Text my={3} fontSize={2} fontFamily="Muli">
                <div
                  dangerouslySetInnerHTML={{ __html: renderProps.content }}
                />
              </Text>
            </Box>
            <Youtube src={renderProps.src} flex="1 1 0" />
          </Flex>
        </Box>
      ))}
    </Box>
  </Box>
)

Videos.propTypes = {
  title: propTypes.string,
  videos: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string,
      src: propTypes.string,
      date: propTypes.string,
      content: propTypes.string,
    })
  ),
}

export default Videos
