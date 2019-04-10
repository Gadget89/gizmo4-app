// ORIGINAL CONTENT--------------------------------------
// import React from 'react'
// import { graphql } from 'gatsby'

// import PageHeader from '../components/PageHeader'
// import Cubes from '../components/Cubes'
// import Content from '../components/Content'
// import Layout from '../components/Layout'

// // Export Template for use in CMS preview
// export const HomePageTemplate = ({ title, subtitle, featuredImage, body, cubes }) => (
//   <main className="Home">
//     <PageHeader
//       large
//       title={title}
//       subtitle={subtitle}
//       backgroundImage={featuredImage}
//     />

//     <section className="section">
//       <div className="container">
//         <Content source={body} />
//       </div>
//     </section>
//   </main>
// )

// // Export Default HomePage for front-end
// const HomePage = ({ data: { page } }) => (
//   <Layout meta={page.frontmatter.meta || false}>
//     <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
//   </Layout>
// )

// export default HomePage

// export const pageQuery = graphql`
//   ## Query for HomePage data
//   ## Use GraphiQL interface (http://localhost:8000/___graphql)
//   ## $id is processed via gatsby-node.js
//   ## query name must be unique to this file
//   query HomePage($id: String!) {
//     page: markdownRemark(id: { eq: $id }) {
//       ...Meta
//       ...Cubes
//       html
//       frontmatter {
//         title
//         subtitle
//         featuredImage
//       }
//     }
//   }
// `
// END---------------------------------------------------

import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'

import Cubes from '../components/Cubes'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ 
  cubes,
  title, 
  link,
  gist,
  buttonText,
  frontImage,
  sideImage,
  backImage, 
  body 
}) => (
  <main className="Home">

    <section className="section">
      <div className="container">
        <Cubes items={cubes}/>
        <Content source={body} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} cubes={page.frontmatter.cubes}/>
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
