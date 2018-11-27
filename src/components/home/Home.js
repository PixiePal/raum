import React, { Component, Fragment } from 'react'

import Gallery from '../gallery/Gallery'
import Banner from '../banner/Banner'

import './home.css'

class Home extends Component {

  render () {
    return (
      <Fragment>
        <Banner />
        <section className='showroom'>
          <div className='desc'>
            <h1><strong>Ausgewählte Event-Locations</strong></h1>
            <h5>Räumlichkeiten in <strong>3D</strong> mit Licht- und Raumgefühl erleben.</h5>
          </div>
          <Gallery />
        </section>
        <section className='howitworks'>
          <h1>Wie funktioniert es?</h1>
          <h5>In 3 Schritte zum richtigen Event Location</h5>

          <div className='how_details'>
            <p>Sie planen eine Tagung, ein Seminar und suchen ein passendes Location für Ihr Event?</p>
            <p>Mit Event-Ort geht es ganz leicht:</p>
            <ol>
              <li>Region Auswählen und Kapazität eingeben</li>
              <li>Räumlichkeiten duch Virtuelle Touren besichtigen</li>
              <li>Location kontaktieren</li>
            </ol>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Home
