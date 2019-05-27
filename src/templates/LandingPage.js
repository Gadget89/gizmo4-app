// import React from 'react'
// import { graphql } from 'gatsby'
// import PostSection from '../components/PostSection'
// import Layout from '../components/Layout'

// // Export Template for use in CMS preview
// export const BlogIndexTemplate = ({
//     title,
//     subtitle,
//     featuredImage,
//     posts = [],
// }) => {
//     return (
//         <main className="">
//             {!!posts.length && (
//                 <section className="">
//                     <div className="">
//                         <PostSection posts={posts} />
//                     </div>
//                 </section>
//             )}
//         </main>
//     )
// }

// // Export Default BlogIndex for front-end
// const BlogIndex = ({ data: { page, posts, postCategories } }) => (
//   <Layout
//     meta={page.frontmatter.meta || false}
//     title={page.frontmatter.title || false}
//   >
//     <BlogIndexTemplate
//       {...page}
//       {...page.fields}
//       {...page.frontmatter}
//       posts={posts.edges.map(post => ({
//         ...post.node,
//         ...post.node.frontmatter,
//         ...post.node.fields
//       }))}
//       postCategories={postCategories.edges.map(post => ({
//         ...post.node,
//         ...post.node.frontmatter,
//         ...post.node.fields
//       }))}
//     />
//   </Layout>
// )

// export default BlogIndex

// export const pageQuery = graphql`
//   ## Query for BlogIndex data
//   ## Use GraphiQL interface (http://localhost:8000/___graphql)
//   ## $id is processed via gatsby-node.js
//   ## query name must be unique to this file
//   query BlogIndex($id: String!) {
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

//     posts: allMarkdownRemark(
//       filter: { fields: { contentType: { eq: "posts" } } }
//       sort: { order: DESC, fields: [frontmatter___date] }
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             date
//             gist
//             buttonText
//             categories {
//               category
//             }
//             featuredImage
//           }
//         }
//       }
//     }
//     postCategories: allMarkdownRemark(
//       filter: { fields: { contentType: { eq: "postCategories" } } }
//       sort: { order: ASC, fields: [frontmatter___title] }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `
