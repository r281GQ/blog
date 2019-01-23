import React from 'react'
import propTypes from 'prop-types'
import { Box, Text } from 'rebass'

import Pagination from './../Pagination'
import Preview from './ArticlePreview'

import { Split } from './styled'

const RecentArticles = props => (
  <Box as={Split} maxWidth={600} px={props.subtle && 3}>
    <Text fontSize={props.subtle ? 3 : 7} my={4}>
      {props.title.toLowerCase()}
    </Text>
    {props.recentArticles.map(article => (
      <Preview key={article.title} {...article} />
    ))}
    {props.pagination && <Pagination {...props.pagination} />}
  </Box>
)

RecentArticles.propTypes = {
  subtle: propTypes.bool,
  title: propTypes.string.isRequired,
  recentArticles: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      excerpt: propTypes.string.isRequired,
      date: propTypes.number.isRequired,
      cover: propTypes.string.isRequired,
      content: propTypes.string.isRequired,
      tags: propTypes.string.isRequired,
      path: propTypes.string.isRequired,
    })
  ),
}

RecentArticles.defaultProps = {
  subtle: true,
  title: 'articles',
  recentArticles: [],
}

export default RecentArticles
