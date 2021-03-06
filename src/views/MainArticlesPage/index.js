import React from 'react'
import { graphql } from 'gatsby'

import RecentArticles from './../RecentArticles'
import Layout from './../../components/Layout'

import Page from '../../containers/Page'

const Main = props => (
  <Layout name="articles">
    <Page {...props}>
      {({ posts, paginationProps }) => (
        <RecentArticles
          subtle
          title="articles"
          recentArticles={posts}
          pagination={paginationProps}
        />
      )}
    </Page>
  </Layout>
)

export default Main

export const allBlogPost = graphql`
  query filterBlogPosts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "journal" } } }
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            date
            tags
          }
        }
      }
    }
  }
`
