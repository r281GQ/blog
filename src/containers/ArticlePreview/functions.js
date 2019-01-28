import { map, path, pathOr, pipe } from 'ramda'
import urljoin from 'url-join'

import formatDate from '../../util/formatDate'

const trim = x => x.trim()

export const formatTags = pipe(
  pathOr([], ['tags']),
  x => x.split(','),
  map(trim)
)

export const getDate = pipe(
  path(['date']),
  formatDate
)

export const getUrl = (data, props) =>
  urljoin(
    data.site.siteMetadata.siteUrl,
    data.site.siteMetadata.pathPrefix,
    props.path
  )

export const getFrontMatter = path(['data', 'markdownRemark', 'frontmatter'])
