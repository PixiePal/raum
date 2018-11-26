import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Item extends Component {

  render () {
    return (
      <Link className='galleryItem' key={this.props.item.id}

        to={{pathname: `/room/${this.props.item.id}`}}
      >
        <img src={this.props.item.imageUrl} className='galleryItemImage' alt='Raum' />
        <p className='galleryItemTitle' >{this.props.item.name}</p>
        <p className='button'>DETAILS</p>
      </Link>
    )
  }
}

export default Item
