import React from 'react'
import { Flex, Text } from 'rebass'

import Hyphens from './../../../components/Hyphens'

import ArticleDetail from '../../Sidebar/ArticleDetail'

const Body = props => (
  <Flex
    flex="1 1 0"
    flexDirection={[
      'column-reverse',
      'column-reverse',
      'column-reverse',
      'row',
    ]}
    justifyContent="space-around"
  >
    <Text
      as={Hyphens}
      css={{ maxWidth: '800px' }}
      fontFamily="Muli"
      fontSize={[0, 2]}
      lineHeight={1.8}
    >
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </Text>
    <ArticleDetail {...props.details} />
  </Flex>
)

export default Body
