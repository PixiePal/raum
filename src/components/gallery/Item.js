import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Item extends Component {

  render () {
    return (
      <div className='galleryItem' >
        <img src={this.props.item.imageUrl} className='galleryItemImage' alt='Raum' />
        <p className='galleryItemTitle' >{this.props.item.name}</p>
        <Link key={this.props.item.id}
          to={{pathname: `/room/${this.props.item.id}`}}
        >
          <p className='button'>DETAILS</p>
        </Link>
      </div>
    )
  }
}

export default Item
