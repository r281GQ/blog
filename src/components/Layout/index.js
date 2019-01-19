import React from 'react'
import propTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Box } from 'rebass'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import { ResetStyles } from '../theme'
const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
}

const GlobalStyle = createGlobalStyle`
  html {
      height: 100%;
      width: 100%;
      max-height: 100%;
      max-width: 100%;
      display: flex;
      font-size: 16px;
      line-height: 1.5;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -moz-font-smoothing: antialiased;
    }

    body {
      display: flex;
      flex: auto;
      max-width: 100%;
      max-height: 100%;
      align-self: stretch;
      -webkit-overflow-scrolling: touch;
    }

    #___gatsby {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
    }

    [role=group] {
      min-height: 100vh;
    }

`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Layout = props => (
  <ThemeProvider theme={theme}>
    <>
      <ResetStyles />
      <GlobalStyle />
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
