import React, { Component, Fragment } from 'react'

import Item from './Item'
import './gallery.css'

class Gallery extends Component {

  render () {
    return (
      <section className='gallery container' >
        <section className='row'>
          {this.props.items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </section>
      </section>
    )
  }
}

export default Gallery
