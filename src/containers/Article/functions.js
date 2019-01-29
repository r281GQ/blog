import State from 'crocks/State'
import {
  __,
  append,
  always,
  converge,
  concat,
  ifElse,
  map,
  path,
  pathEq,
  pathOr,
  pipe,
} from 'ramda'
import urljoin from 'url-join'

import formatDate from './../../util/formatDate'

const { get, modify } = State

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

const getDev = ifElse(pathEq(onFrontMatter('dev'), 'null'), always(null), x => [
  { d: path(onFrontMatter('dev'))(x) },
])

const getHlp = ifElse(pathEq(onFrontMatter('hlp'), 'null'), always(null), x => [
  { x: path(onFrontMatter('hlp'))(x) },
])

const checkArray = el => ifElse(always(Array.isArray(el)), always(el), () => [])

const addElement = el => get(checkArray(el)).chain(x => modify(concat(x)))

const createArray = (a, b) => addElement(a).chain(always(addElement(b)))

export const getAlternates = converge(
  (a, b) => createArray(a, b).execWith([]),
  [getDev, getHlp]
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
