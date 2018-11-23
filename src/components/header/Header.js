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
        </Link>
        <h1 className='description'>Event Locations: Tagungen und Seminare</h1>
      </header>
    )
  }
}

export default Header
