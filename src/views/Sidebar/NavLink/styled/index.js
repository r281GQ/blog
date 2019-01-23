import { Link } from 'gatsby'
import styled from 'styled-components'

const ListItem = styled.li`
  ${props => {
    const fs = props.theme.fontSizes[0]
    const lh = props.theme.space[1]

    return `font-size: ${fs}px;
            line-height: ${lh}px;`
  }}

  list-style-type: none;
  text-align: right;
  text-transform: lowercase;
  font-weight: bold;
`

const RawNavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`

export { ListItem, RawNavLink }
