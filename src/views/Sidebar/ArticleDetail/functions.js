import React from 'react'

import { TagLink } from './styled'

import { Box } from 'rebass'

export const renderTagLink = inline => (tag, idx, tags) => (
  <Box mx={2} display={inline ? `inline` : `block`} key={tag}>
    <TagLink
      key={tag}
      to={`/articles/tags/${tag.replace(/ /g, '_')}`}
    >{`${tag}${idx !== tags.length - 1 ? `, ` : ``}`}</TagLink>
  </Box>
)
