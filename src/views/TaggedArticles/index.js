import React from 'react'

import Page from '../../containers/Page'

import Layout from './../../components/Layout'

import RecentArticles from './../RecentArticles'

const TaggedArticles = props => (
  <Layout>
    <Page {...props}>
      {({ posts }) => (
        <RecentArticles
          subtle
          title={`articles - ${props.pageContext.tag.replace(/\//g, '')}`}
          recentArticles={posts}
        />
      )}
    </Page>
  </Layout>
)

export default TaggedArticles

export const filterJournalsByTags = graphql`
  query filterJournalsByTags($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { regex: $tag } } }) {
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
