import React from 'react'
import propTypes from 'prop-types'
import { Box, Text } from 'rebass'

import BottomBorder from './../../../components/BottomBorder'

const Heading = props => (
  <Box as={BottomBorder} py={[3, 5]} mb={4}>
    <Text fontFamily="Roboto" letterSpacing={-1} fontSize={7} lineHeight={1}>
      {props.title}
    </Text>
  </Box>
)

Heading.propTypes = {
  title: propTypes.string.isRequired,
}

export default Heading
