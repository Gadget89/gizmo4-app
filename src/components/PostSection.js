import React from 'react'

import PostCard from '../components/PostCard'
import './PostSection.css'
import './Cubes.css'

class PostSection extends React.Component {
  static defaultProps = {
    posts: [],
    limit: 6,
    showLoadMore: true,
    loadMoreTitle: 'Load More',
    perPageLimit: 12
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () =>
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))

  render() {
    const { posts, showLoadMore, loadMoreTitle } = this.props,
      { limit } = this.state,
      visiblePosts = posts.slice(0, limit || posts.length)

    return (
      <div className="PostSection">
        {!!visiblePosts.length && (
          <div className="clearfix" style={{ width: '84%' }}>
            {visiblePosts.map((post, index) => (
              <PostCard key={post.title + index} {...post} />
            ))}
          </div>
        )}
        {showLoadMore && visiblePosts.length < posts.length && (
          <div className="taCenter">
            <button className="Button" onClick={this.increaseLimit}>
              {loadMoreTitle}
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default PostSection
