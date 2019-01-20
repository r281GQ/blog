import React from 'react'

import Layout from './../components/Layout'

import RecentArticles from './../views/RecentArticles'

const recentArticles = [
  {
    title: 'eTweeting for 10,000 Years: An Experiment in Autonomous Software',
    excerpt: `Using the design principles of a 10,000 year clock to build a program that's intended to run on a macro timescale.`,
    date: 'July 20, 2018',
    image: `https://brandur.org/assets/10000-years/hook@2x.jpg`,
  },
  {
    title: 'rTweeting for 10,000 Years: An Experiment in Autonomous Software',
    excerpt: `Using the design principles of a 10,000 year clock to build a program that's intended to run on a macro timescale.`,
    date: 'July 20, 2018',
    image: `https://brandur.org/assets/10000-years/hook@2x.jpg`,
  },
  {
    title: 'qTweeting for 10,000 Years: An Experiment in Autonomous Software',
    excerpt: `Using the design principles of a 10,000 year clock to build a program that's intended to run on a macro timescale.`,
    date: 'July 20, 2018',
    image: `https://brandur.org/assets/10000-years/hook@2x.jpg`,
  },
]
const Index = () => (
  <Layout>
    <RecentArticles recentArticles={recentArticles} title="Articles" />
  </Layout>
)

export default Index
