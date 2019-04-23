import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import Image from './CubeImage'

// import _kebabCase from 'lodash/kebabCase'

import './Cubes.css'

export const query = graphql`
  fragment Cubes on MarkdownRemark {
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
`

export default class Cubes extends Component {
  render() {
    const { items } = this.props
    return (
      <div className="content clearfix">
        {items.map(cube => {
          return (
            <div key={cube.id} className="cube-container">
              <div className="photo-cube">
                <Link to={cube.link}>
                  <div className="front photo-desc">
                    <h3 className="secondary-header">{cube.title}</h3>
                    <Image
                      resolutions="small"
                      src={cube.frontImage}
                      alt=""
                    />
                  </div>
                </Link>
                <Link to={cube.link}>
                  <div className="back photo-desc">
                    <h3 className="secondary-header">{cube.title}</h3>
                    <p
                      style={{
                        margin: '42px 0',
                        minHeight: '88px',
                        lineHeight: '1.25'
                      }}
                    >
                      {cube.gist}
                    </p>
                    <span className="call-to-action">
                      {cube.buttonText}
                    </span>
                  </div>
                </Link>
                <div className="left">
                  <Image
                    resolutions="small"
                    src={cube.sideImage}
                    alt=""
                  />
                </div>
                <div className="right">
                  <Image
                    resolutions="small"
                    src={cube.backImage}
                    alt=""
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

// Gallery.propTypes = {
//     images: PropTypes.array.isRequired
// }
