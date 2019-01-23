const path = require('path')

const ENTRIES_PER_PAGE = 5

const Article = path.resolve('./src/views/Article/index.js')
const Articles = path.resolve('./src/views/MainArticlesPage/index.js')
const TaggedArticles = path.resolve('./src/views/TaggedArticles/index.js')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const allEntries = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "journal" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              tags
              category
              location
              title
            }
          }
        }
      }
    }
  `)

  const tagString = allEntries.data.allMarkdownRemark.edges.reduce(
    (sum, item) => {
      return sum.concat(`${item.node.frontmatter.tags},`)
    },
    ``
  )

  const tags = tagString
    .split(',')
    .map(item => item.trim())
    .filter(item => item !== '')

  tags
    .map(tag => {
      return {
        tag,
        query: `{allMarkdownRemark(filter: {frontmatter: {tags: {regex: "/${tag}/"}}}) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }`,
      }
    })
    .forEach(async ({ tag }) => {
      try {
        createPage({
          path: `/articles/tags/${tag.replace(/ /g, '_')}`,
          component: TaggedArticles,
          context: { tag: `/${tag}/` },
        })
      } catch (e) {
        console.log(e)
      }
    })

  allEntries.data.allMarkdownRemark.edges.forEach(
    (_item, number, array) =>
      number % ENTRIES_PER_PAGE === 0 &&
      number !== 0 &&
      createPage({
        path: `/articles/${number / ENTRIES_PER_PAGE + 1}`,
        component: Articles,
        context: {
          limit: ENTRIES_PER_PAGE,
          skip: number,
          currentPage: number / ENTRIES_PER_PAGE + 1,
          hasNext: array.length > number + ENTRIES_PER_PAGE,
        },
      })
  )

  allEntries.data.allMarkdownRemark.edges.forEach(entry => {
    createPage({
      path: entry.node.frontmatter.path,
      component: Article,
    })
  })
}
