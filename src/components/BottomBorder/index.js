import styled from 'styled-components'

export default styled.div`
  ${props => {
    let px = props.solid ? 1 : 10
    let color = props.solid ? '#dedede' : '#000'

    return `border-bottom: ${px}px solid ${color};`
  }}
`
