import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SEO from './../SEO'

import getExcerpt from './../../util/getExcerpt'

import {
  formatTags,
  getDate,
  getFrontMatter,
  getHtml,
  getLocation,
  getTitle,
  getUrl,
  getRepo,
} from './functions'

export default props => (
  <StaticQuery
    query={graphql`
      query journalPreviewUrl {
        site {
          siteMetadata {
            siteUrl
            pathPrefix
          }
        }
      }
    `}
    render={data => (
      <>
        {props.children({
          date: getDate(props),
          tags: formatTags(props),
          title: getTitle(props),
          content: getHtml(props),
          url: getUrl(data, props),
          location: getLocation(props),
          repo: getRepo(props),
        })}
        <SEO
          isJournal
          excerpt={getExcerpt({ content: getHtml(props) })}
          postMeta={props(props)}
        />
      </>
    )}
  />
)
