import styled from 'styled-components'

export default styled.div`
  ${props => {
    let px = props.solid ? 1 : 10
    let color = props.solid
      ? props.theme.colors.textAlternate
      : props.theme.colors.black

    return `border-bottom: ${px}px solid ${color};`
  }}
`
