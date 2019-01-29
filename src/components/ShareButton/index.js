import React from 'react'
import { withTheme } from 'styled-components'

import { Box } from 'rebass'

import {
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  FacebookShareButton,
} from 'react-share'

export const Twitter = withTheme(({ url, theme }) => (
  <Box mx={2}>
    <TwitterShareButton url={url} style={{ cursor: 'pointer' }}>
      <TwitterIcon
        size={24}
        logoFillColor={theme.colors.black}
        iconBgStyle={{ fill: theme.colors.lightgray }}
      />
    </TwitterShareButton>
  </Box>
))

export const LinkedIn = withTheme(({ url, theme }) => (
  <Box mx={2}>
    <LinkedinShareButton url={url} style={{ cursor: 'pointer' }}>
      <LinkedinIcon
        size={24}
        logoFillColor={theme.colors.black}
        iconBgStyle={{ fill: theme.colors.lightgray }}
      />
    </LinkedinShareButton>
  </Box>
))

export const Facebook = withTheme(({ url, theme }) => (
  <Box mx={2}>
    <FacebookShareButton url={url} style={{ cursor: 'pointer' }}>
      <FacebookIcon
        size={24}
        logoFillColor={theme.colors.black}
        iconBgStyle={{ fill: theme.colors.lightgray }}
      />
    </FacebookShareButton>
  </Box>
))
