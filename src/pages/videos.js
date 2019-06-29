import React from 'react'
import { graphql } from 'gatsby'
import * as R from 'ramda'

import Layout from './../components/Layout'

import Videos from '../views/Videos'

const normaliseVideo = R.compose(
  R.map(
    R.compose(
      item => ({
        date: item.frontmatter.date,
        src: item.frontmatter.src,
        title: item.frontmatter.title,
        content: item.html,
      }),
      R.prop('node')
    )
  ),
  R.pathOr([], ['data', 'allMarkdownRemark', 'edges'])
)

const Video = props => (
  <Layout name="videos">
    <Videos {...props} title="Videos" videos={normaliseVideo(props)} />
  </Layout>
)

export default Video

export const videos = graphql`
  query videos {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "video" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            src
            date
          }
        }
      }
    }
  }
`
