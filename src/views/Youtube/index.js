import React from 'react'
import propTypes from 'prop-types'
import { Box } from 'rebass'

const YouTube = props => (
  <Box
    {...props}
    css={{
      height: 0,
      paddingBottom: 900 / 16 + '%',
      position: 'relative',
      overflow: 'hidden',
      '& > iframe': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        border: 0,
      },
    }}
  >
    <iframe
      width="560"
      height="315"
      src={props.src}
      frameBorder="0"
      allowFullScreen
    />
  </Box>
)

YouTube.propTypes = {
  src: propTypes.string.isRequired,
}

export default YouTube
