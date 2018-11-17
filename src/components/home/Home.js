import React, { Component, Fragment } from 'react'

import Header from './header/Header'
import Gallery from '../gallery/Gallery'
import Footer from './footer/Footer'

import './home.css'

import banner_image from './banner-room.jpg'
import banner_image_small from './banner-room.jpg'

const defaultItems = [
  { name: 'ibis - Konstanz',
    imageUrl: 'gallery-items/Ibis-Konstanz-Reichenau.jpg',
    modelId: 'jGn4QWGgVVx' },
  { name: 'Mac Museum - Singen',
    imageUrl: 'gallery-items/Mac-Museum-Art-Cars-Restaurant.jpg',
    modelId: '9fAHDwhte4m' },
  { name: 'Mac Museum - Singen',
    imageUrl: 'gallery-items/Mac-Museum-Art-Cars-Tagungen.jpg',
    modelId: 'HRuACdjGkxb' },
  { name: 'ibis - Konstanz',
    imageUrl: 'gallery-items/Ibis-Konstanz-Mainau.jpg',
    modelId: 'MHyZLxJNGGR' },
  { name: 'ibis - Konstanz',
    imageUrl: 'gallery-items/Ibis-Konstanz-Lindau.jpg',
    modelId: '9fAHDwhte4m' }
]

class Home extends Component {

  render () {
    return (
      <Fragment>
        <Header />
        <section className='banner'>
          <img className='bannerImage' srcSet={banner_image + ' 800w, ' + banner_image + ' 200w'}
            sizes='100vw'
            src={banner_image_small} alt='Meetingraum' />
        </section>
        <Gallery items={defaultItems} />
        <Footer />
      </Fragment>
    )
  }
}

export default Home
