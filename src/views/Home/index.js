import React from 'react'
import { StaticQuery } from 'gatsby'
import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'

import RecentArticles from './../RecentArticles'

const Split = styled.div`
  max-width: none;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoints[props.value ? props.value : 0]}) {
    max-width: ${props => props.maxWidth}px;
  }
`

Split.defaultProps = { value: 0 }

export default props => (
  <Flex flexDirection={['column', 'row']}>
    <Box as={Split} maxWidth={250}>
      <Text fontSize={3} my={4}>
        about
      </Text>
      <Text fontFamily="Muli">
        <StaticQuery
          query={graphql`
            query aboutHome {
              allMarkdownRemark(
                filter: { frontmatter: { category: { eq: "about-home" } } }
              ) {
                edges {
                  node {
                    html
                    frontmatter {
                      category
                    }
                  }
                }
              }
            }
          `}
          render={result => (
            <div
              dangerouslySetInnerHTML={{
                __html: result.allMarkdownRemark.edges[0].node.html,
              }}
            />
          )}
        />
      </Text>
    </Box>
    <RecentArticles
      recentArticles={props.posts}
      title="Recent articles"
      subtle
    />
  </Flex>
)
