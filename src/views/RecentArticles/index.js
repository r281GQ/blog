import React from 'react'
import propTypes from 'prop-types'
import { Box, Text } from 'rebass'

import Preview from './ArticlePreview'

import { Split } from './styled'

const RecentArticles = props => (
  <Box as={Split} maxWidth={600}>
    <Text fontSize={7} my={4}>
      {props.title}
    </Text>
    {props.recentArticles.map(article => (
      <Preview key={article.title} {...article} />
    ))}
  </Box>
)

RecentArticles.propTypes = {
  title: propTypes.string.isRequired,
  recentArticles: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      excerpt: propTypes.string.isRequired,
      date: propTypes.string.isRequired,
      image: propTypes.string.isRequired,
    })
  ),
}

export default RecentArticles
