import React from 'react'
import _format from 'date-fns/format'
import PropTypes from 'prop-types'

import { Navigation2 } from 'react-feather'

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
            <p>4 MIN READ</p>
            <p
              style={{
                margin: 0,
                textTransform: 'uppercase'
              }}
            >
              published
            </p>
            <time date={date}>{_format(date, 'MM.DD.YY')}</time>
          </div>
        )}
        <Navigation2
          style={{
            margin: '5rem 0',
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
