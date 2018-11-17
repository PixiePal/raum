import React, { Component, Fragment } from 'react'

class Item extends Component {

  render () {
    return (
      <div className='galleryItem' >
        <img src={this.props.item.imageUrl} className='galleryItemImage' alt='Raum' />
        <p className='galleryItemTitle' >{this.props.item.name}</p>
      </div>
    )
  }
}

export default Item
