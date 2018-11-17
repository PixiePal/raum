import React, { Component, Fragment } from 'react'
import logo from './mini-logo.svg'

import './footer.css'

class Footer extends Component {

  render () {
    return (
      <footer>
        <div className='footerGrid container'>
          <div className='oneColumn'>
            <p className='title'>Über uns</p>
            <p>Lorem ipsum dolor</p>
          </div>
          <div className='oneColumn' />
          <div className='oneColumn'>
            <img src={logo} alt='Logo' />
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer
