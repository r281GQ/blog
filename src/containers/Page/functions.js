import * as R from 'ramda'
import getExcerpt from './../../util/getExcerpt'

const BASE_PAGINATION_PROPS = { left: '/articles', right: undefined }

/**
 *  isNotOnSecondPage :: Props -> a -> Boolean
 */
const isNotOnSecondPage = props => () =>
  R.pipe(
    R.pathEq(['pageContext', 'currentPage'], 2),
    R.not
  )(props)

/**
 *  hasNext :: Props -> () -> Boolean
 */
const hasNext = props => () => R.pathEq(['pageContext', 'hasNext'], true)(props)

/**
 *  decrementPageNumber :: Props -> Number
 */
const decrementPageNumber = R.pipe(
  R.path(['pageContext', 'currentPage']),
  R.dec
)

/**
 *  incrementPageNumber :: Props -> Number
 */
const incrementPageNumber = R.pipe(
  R.path(['pageContext', 'currentPage']),
  R.inc
)

/**
 *  getUriProps :: Props -> PaginationProps
 */
export const getUriProps = props =>
  R.pipe(
    R.cond([
      [
        hasNext(props),
        R.assoc('right', `/articles/${incrementPageNumber(props)}`),
      ],
      [() => true, R.identity],
    ]),
    R.cond([
      [
        isNotOnSecondPage(props),
        R.assoc('left', `/articles/${decrementPageNumber(props)}`),
      ],

      [() => true, R.identity],
    ])
  )(BASE_PAGINATION_PROPS)

/**
 *  getPosts :: Props -> [Post]
 */
export const getPosts = R.pipe(
  R.path(['data', 'allMarkdownRemark', 'edges']),
  R.map(
    R.compose(
      x => {
        return {
          title: x.frontmatter.title,
          date: x.frontmatter.date,
          excerpt: getExcerpt({ content: x.html }),
          path: x.frontmatter.path,
          cover: x.frontmatter.cover,
          tags: x.frontmatter.tags,
          content: x.html,
        }
      },
      R.prop('node')
    )
  )
)
