import React from 'react'
import propTypes from 'prop-types'
import { Flex } from 'rebass'

import { Collapseable } from './../../components/Collapseable'

import NavLink from './NavLink'

const Sidebar = props => (
  <Flex
    flex="0 1 auto"
    alignItems="flex-end"
    as={Collapseable}
    flexDirection={['row', 'column', 'column', 'column']}
  >
    <Flex
      flexDirection="column"
      collapse={1}
      pr={4}
      fontSize={[0, 1]}
      py={6}
      as={Collapseable}
    >
      <NavLink mainLinks={props.mainLinks} />
    </Flex>
  </Flex>
)

Sidebar.propTypes = {
  mainLinks: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      link: propTypes.string.isRequired,
    })
  ),
  details: propTypes.shape({
    name: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    tags: propTypes.arrayOf(propTypes.string).isRequired,
  }),
}

export default Sidebar
