import React from 'react'
import propTypes from 'prop-types'
import { Box, Flex } from 'rebass'

import { buildLinks, justifyContent } from './functions'

const Pagination = props => (
  <Box mt={3}>
    <Flex flexDirection="row" justifyContent={justifyContent(props)}>
      {buildLinks(props)}
    </Flex>
  </Box>
)

Pagination.propTypes = {
  left: propTypes.string,
  right: propTypes.string,
}

export default Pagination
