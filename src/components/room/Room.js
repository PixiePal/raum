import React, {Component, Fragment } from 'react'

import './room.css'

class Room extends Component {

  constructor (props) {
    super(props)
    this.state = {
      id: props.match.params.id
    }
  }

  render () {
    let roomData = this.props.details[this.state.id - 1]
    let link = 'https://my.matterport.com/show/?m=' + roomData.model_id

    return (
      <Fragment>

        <h1>{roomData.name}</h1>
        <iframe width='100%' height='480'
          title={roomData.id}
          src={link}
          frameBorder='0' allowFullScreen allow='vr' />
      </Fragment>

    )
  }
}

export default Room
