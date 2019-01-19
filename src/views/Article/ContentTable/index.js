import React from 'react'
import propTypes from 'prop-types'
import { Box, Text } from 'rebass'

import List from './List'
import BottomBorder from './../../../components/BottomBorder'

const ContentTable = props => (
  <Box pt={4}>
    <Box as={BottomBorder} solid>
      <Box>
        <Text fontSize={1} fontWeight="bold" letterSpacing="-0.5px">
          {`contents`.toUpperCase()}
        </Text>
      </Box>
      <List list={props.list} main />
    </Box>
  </Box>
)

ContentTable.propTypes = {
  list: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      link: propTypes.string.isRequired,
      subLinks: propTypes.array,
    })
  ),
}

export default ContentTable
