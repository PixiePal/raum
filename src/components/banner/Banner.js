import React, { Component, Fragment } from 'react'

import './banner.css'

class Banner extends Component {

  render () {
    return (
      <section className='hero-image'>
        <div className='hero-text'>
          <h1><strong>Event Locations</strong>: Tagungen und Seminare</h1>
          <p>Hier finden Sie den passenden Ort für Ihren Event.</p>
          <button>Suchen</button>
        </div>
      </section>

    )
  }
}

export default Banner
