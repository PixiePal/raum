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
        <Gallery items={defaultItems} />
      </Fragment>
    )
  }
}

export default Home
