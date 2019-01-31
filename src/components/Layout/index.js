import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import propTypes from 'prop-types'
import { Box, Flex } from 'rebass'
import { ThemeProvider } from 'styled-components'

import Seo from './../../containers/SEO'

import theme, { GlobalStyles, ResetStyles } from './../../theme'

import HorizontalNavbar from '../../views/HorizontalNavbar'
import Sidebar from '../../views/Sidebar'

import { Container, FlexWrapper } from './styled'

import './prism.js.css'

const mainLinks = [
  { name: 'home', link: '/' },
  { name: 'articles', link: '/articles' },
  { name: 'videos', link: '/videos' },
  { name: 'books', link: '/books' },
  { name: 'about', link: '/about' },
]

const Layout = props => (
  <ThemeProvider theme={theme}>
    <>
      <ResetStyles />
      <GlobalStyles />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                siteTitle
              }
            }
          }
        `}
        render={() => (
          <>
            <Box px={[3]} as={Container}>
              <Seo isJournal={false} path={props.name} />
              <Flex
                flexDirection={['column', 'column', 'row', 'row']}
                as={FlexWrapper}
              >
                <HorizontalNavbar mainLinks={mainLinks} />
                <Sidebar mainLinks={mainLinks} />
                <Box flex="1 1 auto">{props.children}</Box>
              </Flex>
            </Box>
          </>
        )}
      />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: propTypes.node.isRequired,
}

export default Layout
