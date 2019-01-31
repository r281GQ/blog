import React from 'react'

const ExternalLink = props => (
  <a href={props.to} target="blank">
    {props.children}
  </a>
)

export default ExternalLink
