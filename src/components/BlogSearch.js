import React from 'react'
import { navigate } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'
import { Search } from 'react-feather'
import './PostCategoriesNav.css'

// To-Do:
// [ ] Return text "No results found" when there is no results to display
// [ ] Add search exit button and functionality.

export default ({ pageCount }) => {
  return (
    <Location>
      {({ location }) => {
        let search = qs.parse(location.search.replace('?', ''))

        return (
          <div className="searchBoxContainer">
            <input
              type="text"
              value={search.s || ''}
              placeholder="Search..."
              onChange={e => {
                let search = {}
                search.s = e.target.value
                search = qs.stringify(search)

                const url = location.href
                  .replace(location.origin, '')
                  .replace(location.search, '')

                navigate(`${url}?${search}`)
              }}
            />
            <Search className="searchBoxIcon" />
          </div>
        )
      }}
    </Location>
  )
}
