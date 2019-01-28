import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { formatTags, getDate, getUrl } from './functions'

export default props => (
  <StaticQuery
    query={graphql`
      query journalUrl {
        site {
          siteMetadata {
            siteUrl
            pathPrefix
          }
        }
      }
    `}
    render={data =>
      props.children({
        date: getDate(props),
        tags: formatTags(props),
        url: getUrl(data, props),
      })
    }
  />
)
