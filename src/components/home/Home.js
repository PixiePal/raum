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
        <h2> Räumlichkeiten mit Licht- und Raumgefühl erleben in 3D</h2>
        <Gallery items={defaultItems} />

        <h2>So funktioniert Event Ort</h2>
        <h3>Sie planen eine Tagung oder Seminar und Sie suchen ein Event Location? </h3>
        <p>In 3 Schritte zum richtigen Event Location</p>
        <p>1. Region Auswählen</p>
        <p>2. Kapazität eingeben</p>
        <p>3. in 3D rumschauen und Location kontaktieren</p>
      </Fragment>
    )
  }
}

export default Home
