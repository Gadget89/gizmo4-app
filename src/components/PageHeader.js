import React, { Fragment } from 'react'
import _format from 'date-fns/format'
import PropTypes from 'prop-types'

import { ArrowDownCircle, Tag, Clock, Edit2 } from 'react-feather'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  date,
  backgroundImage,
  categories,
  large,
  readTime,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <h1 className="PageHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
        <div className="PageHeader--Info-Wrapper">
          {date && (
            <div className="">
              <div style={{ marginTop: '1rem' }}>
                <Edit2 className="PageHeader--Icon" />
                <span className="PageHeader--Icon--Text PageHeader--Icon--Label">
                  published:
                </span>
              </div>
              <span className="PageHeader-Sub-Text">
                <time date={date}>{_format(date, 'MM.DD.YY')}</time>
              </span>
            </div>
          )}

          {readTime && (
            <div
              className="PageHeader--Info-Item"
              style={{
                top: '-2rem'
              }}
            >
              <div style={{ marginTop: '1rem' }}>
                <Clock className="PageHeader--Icon" />
                <span className="PageHeader--Icon--Text PageHeader--Icon--Label">
                  lenth:
                </span>
              </div>
              <span className="PageHeader-Sub-Text">{readTime} MIN READ</span>
            </div>
          )}

          {categories && (
            <div>
              <Fragment>
                <div
                  className="PageHeader--Info-Item"
                  style={{
                    top: '-4rem'
                  }}
                >
                  <div style={{ marginTop: '1rem' }}>
                    <Tag
                      className="PageHeader--Icon"
                      style={{
                        transform: 'rotate(90deg)'
                      }}
                    />
                    <span className="PageHeader--Icon--Text PageHeader--Icon--Label">
                      tags:
                    </span>
                  </div>
                  {categories.map((cat, index) => (
                    <span key={cat.category} className="PageHeader-Sub-Text">
                      {cat.category}
                      {index !== categories.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </Fragment>
              <ArrowDownCircle className="Icon--DownArrow" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
