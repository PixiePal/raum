import React, { Component, Fragment } from 'react'

import Header from './header/Header'

import './home.css'

import banner_image from './banner-room.jpg'
import banner_image_small from './banner-room.jpg'

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
      </Fragment>
    )
  }
}

export default Home
