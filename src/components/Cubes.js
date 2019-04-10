import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import Image from './Image'

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
    console.log(items);
    return (
      <div className="container">
        <div className="content clearfix">
          {items.map(cube => {
            return (
              <div key={cube.id} className="cube-container">
                <div className="photo-cube">
                  <Link to={cube.link}>
                    <div className="front">
                      <h3 className="secondary-header">{cube.title}</h3>
                      <Img className="zoom-img" fluid={cube.frontImage} />
                    </div>
                  </Link>
                  <Link to={cube.link}>
                    <div className="back photo-desc">
                      <h3
                        style={{
                          color: 'white'
                        }}
                      >
                        {cube.title}
                      </h3>
                      <p
                        style={{
                          minHeight: '112px'
                        }}
                      >
                        {cube.gist}
                      </p>
                      <span className="call-to-action">{cube.buttonText}</span>
                    </div>
                  </Link>
                  <div className="left">
                    <Img className="zoom-img" fluid={cube.sideImage} />
                  </div>
                  <div className="right">
                    <Img className="zoom-img" fluid={cube.backImage} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

// Gallery.propTypes = {
//     images: PropTypes.array.isRequired
// }
