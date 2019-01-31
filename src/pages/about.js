import React from 'react'

import Layout from './../components/Layout'

import About from './../views/About'

import * as R from 'ramda'

const getContent = R.compose(
  R.path(['node', 'html']),
  R.head,
  R.path(['data', 'allMarkdownRemark', 'edges'])
)

const Index = props => (
  <Layout name="about">
    <About {...props} content={getContent(props)} />
  </Layout>
)

export default Index

export const aboutMain = graphql`
  query aboutMain {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "about" } } }) {
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
`
