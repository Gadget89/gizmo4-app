import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'
import Cubes from '../components/Cubes'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ cubes, body }) => (
  <main>
    <section
      style={{
        padding: `25vh 0`,
        minHeight: `calc(100vh - 12rem)`
      }}
    >
      <Cubes component={cubes} />
      <Content source={body} />
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Cubes
      html
      frontmatter {
        cubes {
          id
          title
          gist
          link
          buttonText
          frontImage
          sideImage
          backImage
        }
      }
    }
  }
`
