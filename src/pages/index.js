import React from 'react'

import Page from './../containers/Page'

import Layout from './../components/Layout'

import Home from './../views/Home'

const Index = props => (
  <Page {...props}>
    {({ posts }) => (
      <Layout>
        <Home {...props} posts={posts} />
      </Layout>
    )}
  </Page>
)

export default Index

export const firstEntries = graphql`
  query homeEntries {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "journal" } } }
      skip: 0
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            description
            title
            cover
            date
            tags
            src
            size
            path
          }
        }
      }
    }
  }
`
