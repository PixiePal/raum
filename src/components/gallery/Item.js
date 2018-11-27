import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Item extends Component {

  render () {
    return (
      <Link className='galleryItem' key={this.props.roomDetails.id}
        to={{pathname: `/room/${this.props.roomDetails.id}`}}
      >
        <img src={this.props.roomDetails.image_url} className='galleryItemImage' alt='Raum' />
        <p className='galleryItemTitle' >{this.props.roomDetails.name}</p>
        <p className='button'>DETAILS</p>
      </Link>
    )
  }
}

export default Item
