import React from 'react'
import { Link } from 'gatsby'
import propTypes from 'prop-types'
import { Flex, Text, Box } from 'rebass'

const PaginationLink = props => (
  <Link to={props.value}>
    <Flex>
      <Box a color="W000" bg="P500" fontSize={1}>
        <Text fontSize={4} textAlign="center">
          {props.direction}
        </Text>
      </Box>
    </Flex>
  </Link>
)

PaginationLink.propTypes = {
  value: propTypes.string.isRequired,
  direction: propTypes.string.isRequired,
}

export default PaginationLink
