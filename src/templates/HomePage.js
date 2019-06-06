import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'
import Cubes from '../components/Cubes'
import './HomePage.css'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ cubes, body }) => (
  <main>
    <section className="centerWrapper">
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

// import React from 'react'
// import { graphql } from 'gatsby'
// import { Location } from '@reach/router'
// // import qs from 'qs'

// // import PageHeader from '../components/PageHeader'
// // import LinkSection from '../components/LinkSection'
// // import PostCategoriesNav from '../components/PostCategoriesNav'
// import Layout from '../components/Layout'
// import LinkSection from '../components/LinkSection'

// // TO-DO:
// // [] Rename file "LandingIndex" to better organize project

// /**
//  * Filter posts by date. Feature dates will be fitered
//  * When used, make sure you run a cronejob each day to show schaduled content. See docs
//  *
//  * @param {posts} object
//  */
// // export const byDate = posts => {
// //   const now = Date.now()
// //   return posts.filter(post => Date.parse(post.date) <= now)
// // }

// /**
//  * filter posts by category.
//  *
// //  * @param {posts} object
// //  * @param {title} string
// //  * @param {contentType} string
//  */
// // export const byCategory = (posts, title, contentType) => {
// //   const isCategory = contentType === 'postCategories'
// //   const byCategory = post =>
// //     post.categories &&
// //     post.categories.filter(cat => cat.category === title).length
// //   return isCategory ? posts.filter(byCategory) : posts
// // }

// // Export Template for use in CMS preview
// export const HomePageTemplate = ({ title, pages = [] }) => (
//   <Location>
//     {pages => {
//       return (
//         <main>
//           <LinkSection pages />
//         </main>
//       )
//     }}
//   </Location>
// )

// // Export Default LandingIndex for front-end
// const LandingIndex = ({ data: { page, pages } }) => (
//   <Layout
//     meta={page.frontmatter.meta || false}
//     title={page.frontmatter.title || false}
//   >
//     <HomePageTemplate
//       {...page}
//       {...page.fields}
//       {...page.frontmatter}
//       pages={pages.edges.map(page => ({
//         ...page.node,
//         ...page.node.frontmatter,
//         ...page.node.fields
//       }))}
//     />
//   </Layout>
// )

// export default LandingIndex

// export const pageQuery = graphql`
//   ## Query for LandingIndex data
//   ## Use GraphiQL interface (http://localhost:8000/___graphql)
//   ## $id is processed via gatsby-node.js
//   ## query name must be unique to this file
//   query LandingIndex($id: String!) {
//     page: markdownRemark(id: { eq: $id }) {
//       ...Meta
//       fields {
//         contentType
//       }
//       frontmatter {
//         title
//         excerpt
//         template
//         subtitle
//         featuredImage
//       }
//     }

//     pages: allMarkdownRemark(
//       filter: { fields: { contentType: { eq: "pages" } } }
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             gist
//             buttonText
//             featuredImage
//             frontImage
//             sideImage
//             backImage
//             meta {
//               description
//               title
//               canonicalLink
//               noindex
//             }
//           }
//         }
//       }
//     }
//   }
// `
