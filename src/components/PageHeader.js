import React from 'react'
import _format from 'date-fns/format'
import PropTypes from 'prop-types'

import { Navigation2, Clock, Edit } from 'react-feather'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  date,
  backgroundImage,
  catagories,
  large,
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
        {date && (
          <div>
            {/* Add icons next to fields in hero image section. */}
            <div>
              <Clock className="PageHeader--Icon" />
              <span className="PageHeader--Icon--Text">4 MIN READ</span>
            </div>
            <div>
              <Edit className="PageHeader--Icon" />
              <span className="PageHeader--Icon--Text">published:</span>
            </div>
            <div>
              <span className="PageHeader-Date">
                <time date={date}>{_format(date, 'MM.DD.YY')}</time>
              </span>
            </div>
          </div>
        )}
        <Navigation2
          style={{
            margin: '2rem 0',
            width: '90vw',
            textAlign: 'center',
            transform: 'rotate(180deg)'
          }}
        />
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
