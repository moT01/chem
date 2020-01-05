import React from 'react'

import Layout from '../components/layout/layout'
import Publications from '../components/publications'
import ResearchInterests from '../components/researchInterests'
import Students from '../components/students'

const ResearchPage = () => (
  <Layout>
    <ResearchInterests />
    <Publications />
    <Students />
  </Layout>
)

export default ResearchPage
