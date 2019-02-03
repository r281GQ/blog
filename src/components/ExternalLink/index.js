import React from 'react'
import styled from 'styled-components'

const Ext = styled.a`
  text-decoration: underline;
`

const ExternalLink = props => (
  <Ext href={props.to} target="blank">
    {props.children}
  </Ext>
)

export default ExternalLink
