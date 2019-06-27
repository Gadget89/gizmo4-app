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
      to={`/blog`}
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
