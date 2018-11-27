import React, { Component } from 'react'

import Item from './Item'
import './gallery.css'

import data from '../../data.json'

class Gallery extends Component {

  render () {
    return (
      <section className='gallery container' >
        <section className='row'>
          {data.map((item, index) => (
            <Item key={index} roomDetails={item} />
          ))}
        </section>
      </section>
    )
  }
}

export default Gallery
