import React from 'react'

import Layout from './../components/Layout'

import NotReady from '../views/NotReady'

const Index = props => (
  <Layout name="books">
    <NotReady {...props} message="Soon..." />
  </Layout>
)

export default Index
