import React from 'react'

import { TagLink } from './styled'

export const renderTagLink = (tag, idx, tags) => (
  <TagLink key={tag} to={tag}>{`${tag}${
    idx !== tags.length - 1 ? `, ` : ``
  }`}</TagLink>
)
