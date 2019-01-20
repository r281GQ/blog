import React from 'react'
import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'

import Layout from './../../components/Layout'

import RecentArticles from './../RecentArticles'

const recentArticles = [
  {
    title: 'qTweeting for 10,000 Years: An Experiment in Autonomous Software',
    excerpt: `Using the design principles of a 10,000 year clock to build a program that's intended to run on a macro timescale.`,
    date: 'July 20, 2018',
    image: `https://brandur.org/assets/10000-years/hook@2x.jpg`,
  },
  {
    title: 'eTweeting for 10,000 Years: An Experiment in Autonomous Software',
    excerpt: `Using the design principles of a 10,000 year clock to build a program that's intended to run on a macro timescale.`,
    date: 'July 20, 2018',
    image: `https://brandur.org/assets/10000-years/hook@2x.jpg`,
  },
  {
    title: 'fTweeting for 10,000 Years: An Experiment in Autonomous Software',
    excerpt: `Using the design principles of a 10,000 year clock to build a program that's intended to run on a macro timescale.`,
    date: 'July 20, 2018',
    image: `https://brandur.org/assets/10000-years/hook@2x.jpg`,
  },
]

const Split = styled.div`
  max-width: none;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoints[props.value ? props.value : 0]}) {
    max-width: ${props => props.maxWidth}px;
  }
`

Split.defaultProps = { value: 0 }

export default () => (
  <Layout>
    <Flex flexDirection={['column', 'row']}>
      <Box as={Split} maxWidth={250}>
        <Text fontSize={3} my={4}>
          About
        </Text>
        <Text fontFamily="Muli">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultrices lorem ac nunc porta interdum. Nam purus erat, porttitor sit
          amet accumsan at, blandit vel mauris. Praesent nec nisi mauris.
          Suspendisse nulla dui, sagittis eget venenatis id, elementum nec ante.
          Integer dignissim sem ipsum, id vehicula justo cursus et. Nulla
          porttitor massa vitae felis iaculis, at auctor urna accumsan. Nunc
          semper vulputate arcu a dignissim. In in velit maximus, vulputate
          libero in, lobortis leo. Quisque vel leo eget elit ornare aliquam.
          Praesent sed lectus vitae ante blandit molestie. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Praesent aliquam commodo consequat. Cras tempor convallis
          dolor. Praesent egestas volutpat est, id lacinia diam elementum
          venenatis. Curabitur pellentesque justo eget nibh posuere, eget
          iaculis eros mattis. Curabitur commodo egestas felis sed ornare. Proin
          sollicitudin vehicula accumsan. Maecenas tempor porta elit ac pretium.
          Vivamus in arcu sed felis egestas egestas. Nulla varius lacus et lacus
          pretium, a faucibus odio fermentum. Nam convallis, diam eu commodo
          porttitor, sapien augue dignissim neque,
        </Text>
      </Box>
      <RecentArticles
        recentArticles={recentArticles}
        title="Recent articles"
        subtle
      />
    </Flex>
  </Layout>
)
