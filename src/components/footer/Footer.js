import React, { Component } from 'react'
import logo from './mini-logo.svg'

import './footer.css'

class Footer extends Component {

  render () {
    return (
      <footer>
        <div className='footerGrid container'>
          <div className='oneColumn'>
            <p className='title cursive'>Über uns</p>
            <p className='description'>Regionale Event-Locations für Ihre Veranstaltung in 3D. Finden Sie die passende Location für jeden Anlass! </p>

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
