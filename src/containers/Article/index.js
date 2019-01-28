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
  getSize,
  getSrc,
  getTitle,
  getUrl,
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
          src: getSrc(props),
          size: getSize(props),
          url: getUrl(data, props),
          location: getLocation(props),
        })}
        <SEO
          isJournal
          excerpt={getExcerpt({ content: getHtml(props) })}
          postMeta={getFrontMatter(props)}
        />
      </>
    )}
  />
)
