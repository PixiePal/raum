import React, { Component, Fragment } from 'react'

import { Link } from 'react-router-dom'

import './header.css'
import logo from './logo.svg'

class Header extends Component {

  render () {
    return (
      <header className='header container'>
        <Link to={{pathname: `/`}} >
          <img src={logo} className='logo' alt='logo' />
          <p className='description'>Event Locations: Tagungen und Seminare</p>
        </Link>
      </header>
    )
  }
}

export default Header
