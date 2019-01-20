import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import propTypes from 'prop-types'
import { Box, Flex } from 'rebass'
import { ThemeProvider } from 'styled-components'

import theme, { GlobalStyles, ResetStyles } from './../../theme'

import HorizontalNavbar from '../../views/HorizontalNavbar'
import Sidebar from '../../views/Sidebar'

import { Container, FlexWrapper } from './styled'

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
                title
              }
            }
          }
        `}
        render={() => (
          <>
            <Box px={[3, 5]} as={Container}>
              <Flex
                flexDirection={['column', 'column', 'row']}
                as={FlexWrapper}
              >
                <HorizontalNavbar mainLinks={mainLinks} />
                <Sidebar details={props.details} mainLinks={mainLinks} />
                {props.children}
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
