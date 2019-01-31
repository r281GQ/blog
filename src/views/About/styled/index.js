import styled from 'styled-components'

const Container = styled.div`
  max-width: ${props => (props.value ? `${props.value}px;` : `700px`)};
`

export { Container }
