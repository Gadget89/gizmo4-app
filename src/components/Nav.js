import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import TopBarProgress from 'react-topbar-progress-indicator'
import { BarChart2, X } from 'react-feather'
import Logo from './Logo'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import './Nav.css'

// TO-DO: Current iteration of nav is not accessible by tabbing. Redesign nav to pull list of nav landing links and add roles (i.e. role="tablist" role="tab") and id's.

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
              textDecoration: 'none',
              border: 'none'
            }}
          >
            <Logo />
          </Link>
          <div className="Nav--Links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/components/">Portfolio</NavLink>
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
            <NavLink to="/connect/">Connect</NavLink>
            {/* To-Do: Add container and styling to push theme toggle, privacy policy link and copyright to bottom of drop down nav */}
            <div style={{ marginTop: '33vh' }}>
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <label>
                    <input
                      type="checkbox"
                      onChange={e =>
                        toggleTheme(e.target.checked ? 'dark' : 'light')
                      }
                      checked={theme === 'dark'}
                    />{' '}
                    {/* TO-DO: Display opposite mode with lightbulb icon */}
                    Dark Theme
                  </label>
                )}
              </ThemeToggler>
            </div>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? (
              <X
                style={{
                  verticalAlign: 'middle',
                  color: 'var(--text-theme-color)'
                }}
              />
            ) : (
              <BarChart2
                style={{
                  transform: 'rotate(270deg)',
                  verticalAlign: 'middle',
                  color: 'var(--text-theme-color)'
                }}
              />
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
