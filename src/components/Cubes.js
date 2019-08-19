import React from 'react'
import { Link, graphql } from 'gatsby'
// import PropTypes from 'prop-types'
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

export default class Cubes extends React.Component {
  render() {
    const { component } = this.props
    return (
      <div className="content">
        {component.map(cube => {
          return (
            <div key={cube.id} className="cube-container">
              <div className="photo-cube">
                <div className="front photo-desc">
                  <Link to={cube.link}>
                    <h3 className="secondary-header">{cube.title}</h3>
                    <Image resolutions="small" src={cube.frontImage} alt="" />
                  </Link>
                </div>
                <div className="back photo-desc">
                  <Link
                    to={cube.link}
                    style={{
                      border: 'none',
                      borderImage: 'none',
                      borderImageSlice: 'none'
                    }}
                  >
                    <h3 className="secondary-header">{cube.title}</h3>
                    <p
                      style={{
                        margin: '42px 0 33px',
                        minHeight: '88px',
                        lineHeight: '1.25',
                        color: 'white'
                      }}
                    >
                      {cube.gist}
                    </p>

                    <button className="call-to-action">
                      {cube.buttonText}
                    </button>
                  </Link>
                </div>
                <div className="left">
                  <Image resolutions="small" src={cube.sideImage} alt="" />
                </div>
                <div className="right">
                  <Image resolutions="small" src={cube.backImage} alt="" />
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
