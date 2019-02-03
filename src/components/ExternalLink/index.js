import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import styled from 'styled-components'

const Ext = styled(OutboundLink)`
  text-decoration: underline;
`

const ExternalLink = props => (
  <Ext href={props.to} target="blank">
    {props.children}
  </Ext>
)

export default ExternalLink
