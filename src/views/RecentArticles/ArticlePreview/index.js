import React from 'react'
import { Link } from 'gatsby'
import propTypes from 'prop-types'
import { Box, Flex, Text } from 'rebass'

import ArticlePreviewContainer from './../../../containers/ArticlePreview'

import styled from 'styled-components'

export const TagLink = styled(Link)`
  margin: 0 4px;
  display: inline;
  text-decoration: none;
`

export const renderTagLink = (tag, idx, tags) => (
  <TagLink key={tag} to={`/articles/tags/${tag.replace(/ /g, '_')}`}>{`${tag}${
    idx !== tags.length - 1 ? `, ` : ``
  }`}</TagLink>
)

const Preview = props => (
  <ArticlePreviewContainer {...props}>
    {renderProps => (
      <Box my={4} fontSize={0}>
        <Flex>
          <Box pl={[0, 3]} flex="1">
            <Link to={props.path}>
              <Text fontWeight="bold">{props.title}</Text>
            </Link>
            <Flex justifyContent="space-between">
              <Text fontWeight="lighter"> {renderProps.date} </Text>
              <Flex flexWrap="wrap" flexDirection="row">
                {renderProps.tags.map(renderTagLink)}
              </Flex>
            </Flex>
            <Text mt={2} fontFamily="Muli">
              <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
            </Text>
          </Box>
        </Flex>
      </Box>
    )}
  </ArticlePreviewContainer>
)

Preview.propTypes = {
  title: propTypes.string.isRequired,
  excerpt: propTypes.string.isRequired,
  date: propTypes.number.isRequired,
  content: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
}

export default Preview
