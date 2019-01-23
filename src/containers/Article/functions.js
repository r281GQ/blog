import { __, append, map, path, pathOr, pipe } from 'ramda'
import urljoin from 'url-join'

import formatDate from './../../util/formatDate'

const onFrontMatter = append(__, ['data', 'markdownRemark', 'frontmatter'])

const trim = x => x.trim()

export const formatTags = pipe(
  path(onFrontMatter('tags')),
  x => x.split(','),
  map(trim)
)

export const getTitle = path(onFrontMatter('title'))

export const getDate = pipe(
  path(onFrontMatter('date')),
  formatDate
)

export const getSrc = path(onFrontMatter('src'))

export const getSize = path(onFrontMatter('size'))

export const getUrl = (data, props) =>
  urljoin(
    data.site.siteMetadata.siteUrl,
    data.site.siteMetadata.pathPrefix,
    props.data.markdownRemark.frontmatter.path
  )

export const getHtml = path(['data', 'markdownRemark', 'html'])

export const getFrontMatter = path(['data', 'markdownRemark', 'frontmatter'])

export const getLocation = pathOr('', [
  'data',
  'markdownRemark',
  'frontmatter',
  'location',
])
