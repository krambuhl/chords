import React from 'react'
import { PageLayout } from '@components'

const IndexPage = () => (
  <PageLayout>
    Hello
  </PageLayout>
)

IndexPage.getInitialProps = ({ query }) => {
  return { }
}

export default IndexPage
