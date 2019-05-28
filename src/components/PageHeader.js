import React from 'react'
import _format from 'date-fns/format'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  date,
  backgroundImage,
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
        {date && <time date={date}>{_format(date, 'MMMM Do, YYYY')}</time>}
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
