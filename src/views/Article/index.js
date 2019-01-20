import React from 'react'
import { Box } from 'rebass'

import Layout from '../../components/Layout'

import Heading from './Heading'
import Body from './Body'

const content =
  'Years ago an article came out of LinkedIn about the unified log, a useful architectural pattern for services in a distributed system share state with one another. In the log’s design, services emit state changes into an ordered data structure in which each new record gets a unique ID. Unlike a queue, a log is durable across any number of reads until it’s explicitly truncated.\n'

const links = [
  {
    link: 'Redis streams',
    name: 'Redis streams',
    subLinks: [
      { link: 'Versus kafka', name: 'Versus kafka' },
      {
        link: 'Configuring Redis for durability',
        name: 'Configuring Redis for durability',
      },
    ],
  },
  {
    link: 'Unified Rocket Rides',
    name: 'Unified Rocket Rides',
    subLinks: [
      { link: 'At-least once design', name: 'At-least once design' },
      {
        link: 'The API',
        name: 'The API',
      },
      {
        link: 'The streamer',
        name: 'The streamer',
        subLinks: [
          {
            link: 'Log truncation',
            name: 'Log truncation',
          },
        ],
      },

      { link: 'Consumers & checkpointing', name: 'Consumers & checkpointing' },
      {
        link: 'Simulating failure',
        name: 'Simulating failure',
      },
    ],
  },
  {
    link: 'Other considerations',
    name: 'Other considerations',
    subLinks: [
      {
        link: 'Non-transactional consumers & idempotency',
        name: 'Non-transactional consumers & idempotency',
      },
      {
        link: 'Versus Postgres logical replication',
        name: 'Versus Postgres logical replication',
      },
      {
        link: 'Are delivery guarantees absolute?',
        name: 'Are delivery guarantees absolute?',
      },
    ],
  },
  {
    link: 'Log-based architecture',
    name: 'Log-based architecture',
  },
]

const details = {
  name: `Redis Streams and the Unified Log`,
  date: `November 8, 2017`,
  tags: ['desk', 'table', 'pen'],
  location: 'San Francisco',
}

const Article = () => (
  <Layout details={details}>
    <Box flex="1 1 0">
      <Heading title="Redis Streams and the Unified Log" />
      <Body links={links} content={content} />
    </Box>
  </Layout>
)

export default Article
