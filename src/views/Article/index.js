import React from 'react'
import { graphql } from 'gatsby'
import { Box } from 'rebass'

import ArticleContainer from './../../containers/Article'

import Layout from '../../components/Layout'

import Heading from './Heading'
import Body from './Body'

const Article = props => (
  <ArticleContainer {...props}>
    {renderProps => (
      <Layout>
        <Box flex="1 1 0">
          <Heading title={renderProps.title} />
          <Body
            details={{
              name: renderProps.title,
              tags: renderProps.tags,
              date: renderProps.date,
              location: renderProps.location,
              url: renderProps.url,
              alternates: renderProps.alternates,
              repo: renderProps.repo,
            }}
            content={renderProps.content}
          />
        </Box>
      </Layout>
    )}
  </ArticleContainer>
)

export const journalQuery = graphql`
  query journalQuery($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        category
        date
        dev
        hlp
        description
        location
        path
        repo
        tags
        title
      }
    }
  }
`

export default Article
