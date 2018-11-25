import React, { Component, Fragment } from 'react'

import Gallery from '../gallery/Gallery'

import './home.css'

import banner_image from './banner-room.jpg'
import banner_image_small from './banner-room.jpg'

const defaultItems = [
  { id: 1,
    name: 'ibis - Konstanz',
    imageUrl: 'gallery-items/Ibis-Konstanz-Reichenau.jpg',
    modelId: 'jGn4QWGgVVx' },
  { id: 2,
    name: 'Mac Museum - Singen',
    imageUrl: 'gallery-items/Mac-Museum-Art-Cars-Restaurant.jpg',
    modelId: '9fAHDwhte4m' },
  { id: 3,
    name: 'Mac Museum - Singen',
    imageUrl: 'gallery-items/Mac-Museum-Art-Cars-Tagungen.jpg',
    modelId: 'HRuACdjGkxb' },
  { id: 4,
    name: 'ibis - Konstanz',
    imageUrl: 'gallery-items/Ibis-Konstanz-Mainau.jpg',
    modelId: 'MHyZLxJNGGR' },
  { id: 5,
    name: 'ibis - Konstanz',
    imageUrl: 'gallery-items/Ibis-Konstanz-Lindau.jpg',
    modelId: '9fAHDwhte4m' }
]

class Home extends Component {

  render () {
    return (
      <Fragment>
        <section className='banner'>
          <img className='bannerImage' srcSet={banner_image + ' 800w, ' + banner_image + ' 200w'}
            sizes='100vw'
            src={banner_image_small} alt='Meetingraum' />
        </section>
        <section className='showroom'>
          <div className='desc'>
            <h1><strong>Ausgewählte Event-Locations</strong></h1>
            <h5>Räumlichkeiten in <strong>3D</strong> mit Licht- und Raumgefühl erleben.</h5>
          </div>
          <Gallery items={defaultItems} />
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
