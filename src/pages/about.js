import React from 'react'

import Layout from './../components/Layout'

import About from './../views/About'

const Index = props => (
  <Layout>
    <About {...props} />
  </Layout>
)

export default Index
