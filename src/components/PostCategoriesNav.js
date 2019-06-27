import React from 'react'
import { Link } from 'gatsby'

import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'
const PostCategoriesNav = ({
  categories,
  enableSearch,
  activeStyles = {
    textDecoration: 'underline',
    border: 'solid 1px var(--primary)'
  }
}) => (
  <div className="PostCategoriesNav">
    <Link
      className="PostCategoriesTabs"
      exact="true"
      to={`/blog/`}
      activeStyle={activeStyles}
    >
      All
    </Link>
    {categories.map((category, index) => (
      <Link
        exact="true"
        className="PostCategoriesTabs"
        key={category.title + index}
        to={category.slug}
        activeStyle={activeStyles}
      >
        {category.title}
      </Link>
    ))}

    {enableSearch && <BlogSearch />}
  </div>
)

export default PostCategoriesNav

// import React from 'react'
// import { navigate } from 'gatsby'
// import { Location } from '@reach/router'
// import qs from 'qs'
// import { Search } from 'react-feather'
// import './PostCategoriesNav.css'

// To-Do:
// [ ] Return text "No results found" when there is no results to display
// [ ] Add search exit button and functionality.

// export default ({ pageContent }) => {
//   return (
//     <Location>
//       {({ location }) => {
//         let currentUrl = location

//         return (
//           <div className="PostCategoriesNav">
//     <Link className="PostCategoriesTabs" exact="true" to={`/blog/`}>
//       All
//     </Link>
//     {categories.map((category, index) => (
//       <Link
//         exact="true"
//         className="PostCategoriesTabs"
//         key={category.title + index}
//         to={category.slug}
//       >
//         {category.title}
//       </Link>
//     ))}

//     {enableSearch && <BlogSearch />}
//   </div>
//         )
//       }}
//     </Location>
//   )
// }
