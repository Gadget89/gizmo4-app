// import React from 'react'
// import { Link } from 'gatsby'

// import Image from './Image'
// import './PostCard.css'

// const PostCard = ({
//   featuredImage,
//   title,
//   excerpt,
//   slug,
//   categories = [],
//   className = '',
//   ...props
// }) => (
//   <Link to={slug} className={`PostCard ${className}`}>
//     {featuredImage && (
//       <div className="PostCard--Image relative">
//         <Image background src={featuredImage} alt={title} />
//       </div>
//     )}
//     <div className="PostCard--Content">
//       {title && <h3 className="PostCard--Title">{title}</h3>}
//       <div className="PostCard--Category">
//         {categories && categories.map(cat => cat.category).join(', ')}
//       </div>
//       {excerpt && <div className="PostCard--Excerpt">{excerpt}</div>}
//     </div>
//   </Link>
// )

// export default PostCard

import React from 'react'
import { Link } from 'gatsby'
import Image from './CubeImage'
import _format from 'date-fns/format'

import './Cubes.css'

const PostCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  date,
  gist,
  buttonText,
  frontImage,
  sideImage,
  backImage,
  ...props
}) => (
  <div key={slug} className="cube-container">
    <div className="photo-cube">
      <Link to={slug}>
        <div className="front photo-desc">
          {title && <h3 className="secondary-header">{title}</h3>}
          {date && (
            <time
              itemProp="dateCreated pubdate datePublished"
              className="publish-date"
              date={date}
            >
              {_format(date, 'MMMM Do, YYYY')}
            </time>
          )}
          <Image resolutions="small" src={featuredImage} alt="" />
        </div>
      </Link>
      <Link to={slug}>
        <div className="back photo-desc">
          {title && <h3 className="secondary-header">{title}</h3>}
          {gist && (
            <p
              style={{
                margin: '42px 0',
                minHeight: '88px',
                lineHeight: '1.25'
              }}
            >
              {gist}
            </p>
          )}
          {buttonText && (
            <button className="call-to-action">{buttonText}</button>
          )}
        </div>
      </Link>
      <div className="left">
        <Image resolutions="small" src={featuredImage} alt="" />
      </div>
      <div className="right">
        <Image resolutions="small" src={featuredImage} alt="" />
      </div>
    </div>
  </div>
)

export default PostCard
