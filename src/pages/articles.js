import React from 'react'

import Page from '../containers/Page'

import Layout from './../components/Layout'

import RecentArticles from './../views/RecentArticles'

const Index = props => (
  <Layout>
    <Page {...props}>
      {({ posts }) => (
        <RecentArticles
          recentArticles={posts.slice(0, 5)}
          title="Articles"
          pagination={{
            left: undefined,
            right: posts.length > 5 ? `/articles/2` : undefined,
          }}
        />
      )}
    </Page>
  </Layout>
)

export default Index

export const firstEntries = graphql`
  query firstEntries {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "journal" } } }
      skip: 0
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            description
            title
            date
            tags
            path
          }
        }
      }
    }
  }
`
