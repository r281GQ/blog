import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import propTypes from 'prop-types'
import { Box } from 'rebass'
import { ThemeProvider } from 'styled-components'

import theme, { GlobalStyles, ResetStyles } from './../../theme'

import { Container } from './styled'

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
          <Box px={4} as={Container}>
            {props.children}
          </Box>
        )}
      />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: propTypes.node.isRequired,
}

export default Layout
