import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import TopBarProgress from 'react-topbar-progress-indicator'
import { BarChart2, X } from 'react-feather'
import Logo from './Logo'

import './Nav.css'

TopBarProgress.config({
  barColors: {
    '0': '#272727',
    '0.65': 'white',
    '0.7': 'red',
    '0.75': 'orange',
    '0.8': 'yellow',
    '0.85': 'green',
    '0.9': 'blue',
    '0.95': 'indigo',
    '1.0': 'violet'
  },
  shadowBlur: 5
})

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false,
    loading: true
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname, loading: false })

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
      { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        {this.state.loading && <TopBarProgress />}
        <div className="Nav--Container container">
          <Link
            to="/"
            onClick={this.handleLinkClick}
            style={{
              textDecoration: 'none'
            }}
          >
            <Logo />
          </Link>
          <div className="Nav--Links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/components/">Components</NavLink>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'posts' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('posts') ||
                  this.props.location.pathname.includes('blog') ||
                  this.props.location.pathname.includes('post-categories')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('posts')}
              >
                Blog
              </span>
              <div className="Nav--GroupLinks">
                <NavLink to="/blog/" className="Nav--GroupLink">
                  All Posts
                </NavLink>
                {subNav.posts.map((link, index) => (
                  <NavLink
                    to={link.slug}
                    key={'posts-subnav-link-' + index}
                    className="Nav--GroupLink"
                  >
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink to="/default/">Default</NavLink>
            <NavLink to="/connect/">Connect</NavLink>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? (
              <X />
            ) : (
              <BarChart2 style={{ transform: 'rotate(270deg)' }} />
            )}
          </button>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
