import React from 'react'

import LinkContainer from '../components/LinkContainer'
import './PostSection.css'
// To-Do:
// [ ] Exchange "posts" for "pages" accross components that require data to display index pages
class LinkSection extends React.Component {
  static defaultProps = {
    pages: [],
    title: 'Hello World',
    limit: 3,
    showLoadMore: true,
    loadMoreTitle: 'Load More',
    perPageLimit: 4
  }

  render() {
    const { pages, title } = this.props
    return (
      <div className="PostSection">
        <h2 className="PostSection--Title">{title}</h2>
        <div className="PostSection--Grid">
          {pages.map(pages => (
            <LinkContainer key={pages.title} {...pages} />
          ))}
        </div>
      </div>
    )
  }
}

export default LinkSection
