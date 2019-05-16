import React from 'react'
import { Link } from 'gatsby'

import Image from './CubeImage'
import './Cubes.css'

// To-Do:
// [x] Establish data needed for each cube container.
// [x] Import cube structure from template.
// [x] Pass data into component.
// [ ] Test that component works as designed.

const LinkContainer = ({
  slug,
  featuredImage,
  title,
  subtitle,
  id,
  gist,
  buttonText,
  className = '',
  frontImage,
  sideImage,
  backImage,
  ...props
}) => (
  <div key={id} className="cube-container">
    <div className="photo-cube">
      <Link to={slug}>
        <div className="front photo-desc">
          {title && <h3 className="secondary-header">{title}</h3>}
          {frontImage && <Image resolutions="small" src={frontImage} alt="" />}
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
          {buttonText && <span className="call-to-action">{buttonText}</span>}
        </div>
      </Link>
      {sideImage && (
        <div className="left">
          <Image resolutions="small" src={sideImage} alt="" />
        </div>
      )}
      {backImage && (
        <div className="right">
          <Image resolutions="small" src={backImage} alt="" />
        </div>
      )}
    </div>
  </div>
)

export default LinkContainer
