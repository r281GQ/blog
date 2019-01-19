import React from 'react'
import propTypes from 'prop-types'
import { Box, Text } from 'rebass'

import { Ol, ContentLink } from './styled'

const OrderedList = props => (
  <Box ml={3} as={Ol} main={props.main}>
    {props.children}
  </Box>
)

const ListItem = props => (
  <Box as="li" my={2}>
    <Text fontSize={props.main ? 1 : 0}>
      <ContentLink main={props.main} to={props.item.link}>
        {props.item.name}
      </ContentLink>
      {props.item.subLinks && <List list={props.item.subLinks} />}
    </Text>
  </Box>
)

const List = props => (
  <OrderedList main={props.main}>
    {props.list.map(item => (
      <ListItem key={item.name} main={props.main} item={item} />
    ))}
  </OrderedList>
)

List.propTypes = {
  main: propTypes.bool,
  list: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      link: propTypes.string.isRequired,
      subLinks: propTypes.array,
    })
  ),
}

export default List
