import React from 'react'
import { Box, Image, Text } from 'rebass'

import Hyphens from './../../components/Hyphens'

import { Container } from './styled'

const About = () => (
  <Box flex=" 1" as={Container}>
    <Text fontSize={7} my={4}>
      about
    </Text>
    <Image
      src={`https://images.unsplash.com/photo-1547828535-340f8a840376?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80`}
    />
    <Text my={4}>Dude quote!</Text>
    <Text as={Hyphens} fontFamily="Muli">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices
      lorem ac nunc porta interdum. Nam purus erat, porttitor sit amet accumsan
      at, blandit vel mauris. Praesent nec nisi mauris. Suspendisse nulla dui,
      sagittis eget venenatis id, elementum nec ante. Integer dignissim sem
      ipsum, id vehicula justo cursus et. Nulla porttitor massa vitae felis
      iaculis, at auctor urna accumsan. Nunc semper vulputate arcu a dignissim.
      In in velit maximus, vulputate libero in, lobortis leo. Quisque vel leo
      eget elit ornare aliquam. Praesent sed lectus vitae ante blandit molestie.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Praesent aliquam commodo consequat. Cras tempor
      convallis dolor. Praesent egestas volutpat est, id lacinia diam elementum
      venenatis. Curabitur pellentesque justo eget nibh posuere, eget iaculis
      eros mattis. Curabitur commodo egestas felis sed ornare. Proin
      sollicitudin vehicula accumsan. Maecenas tempor porta elit ac pretium.
      Vivamus in arcu sed felis egestas egestas. Nulla varius lacus et lacus
      pretium, a faucibus odio fermentum. Nam convallis, diam eu commodo
      porttitor, sapien augue dignissim neque,
    </Text>
  </Box>
)

export default About
