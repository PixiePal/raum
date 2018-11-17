import React, { Component, Fragment } from 'react'
import logo from './logo.svg'

import './header.css'

class Header extends Component {

  render () {
    return (
      <header className='header container'>
        <img src={logo} className='logo' alt='logo' />
      </header>
    )
  }
}

export default Header
