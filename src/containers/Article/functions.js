import {
  __,
  append,
  always,
  ifElse,
  map,
  path,
  pathEq,
  pathOr,
  pipe,
} from 'ramda'
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

export const getRepo = ifElse(
  pathEq(onFrontMatter('repo'), 'null'),
  always(null),
  path(onFrontMatter('repo'))
)

export const getUrl = (data, props) =>
  urljoin(
    `http://`,
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
