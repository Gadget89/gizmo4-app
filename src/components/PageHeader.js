import React from 'react'
import _format from 'date-fns/format'
import PropTypes from 'prop-types'

import { ArrowDownCircle, Clock, Edit2 } from 'react-feather'

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
        <div className="PageHeader--Info-Wrapper">
          <div>
            <Clock className="PageHeader--Icon" />
            <span className="PageHeader--Icon--Text PageHeader--Icon--Label">
              lenth:
            </span>
          </div>
          <div style={{ position: 'absolute' }}>
            <span className="PageHeader-Sub-Text">4 MIN READ</span>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Edit2 className="PageHeader--Icon" />
            <span className="PageHeader--Icon--Text PageHeader--Icon--Label">
              published:
            </span>
          </div>
          {date && (
            <div>
              <span className="PageHeader-Sub-Text">
                <time date={date}>{_format(date, 'MM.DD.YY')}</time>
              </span>
            </div>
          )}
          <ArrowDownCircle
            style={{
              width: '90vw',
              textAlign: 'center'
            }}
          />
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
