import React, { Fragment } from 'react'

import './room.css'

function Room ({ match }) {
  return (
    <Fragment>
      <p>This is a room for id: {match.params.id}</p>
      <h1>Tagungsraum Ibis Hotel</h1>
      <iframe width='100%' height='480'
        title='{match.params.id}'
        src='https://my.matterport.com/show/?m=jGn4QWGgVVx&start=%7B%22camera_mode%22%3A1%2C%22camera_position%22%3A%7B%22x%22%3A7.889103889465332%2C%22y%22%3A1.1365827322006226%2C%22z%22%3A2.547135591506958%7D%2C%22camera_quaternion%22%3A%7B%22x%22%3A-0.0020390740267205616%2C%22y%22%3A0.6572086171695919%2C%22z%22%3A0.0017780153263281119%2C%22w%22%3A0.7537038638329021%7D%2C%22scan_id%22%3A%2259fceb21d6544464add31f43e3cfa02c%22%7D&play=1&brand=0&lang=de&title=0'
      frameBorder='0' allowFullScreen allow='vr' />
      <a href='https://my.matterport.com/show/?m=jGn4QWGgVVx&start=%7B%22camera_mode%22%3A3%2C%22camera_position%22%3A%7B%22x%22%3A3.986572265625%2C%22y%22%3A12.765625%2C%22z%22%3A2.790283203125%7D%2C%22camera_quaternion%22%3A%7B%22x%22%3A-0.7071067811865475%2C%22y%22%3A0%2C%22z%22%3A0%2C%22w%22%3A0.7071067811865476%7D%2C%22floor_visibility%22%3A%5B%5D%7D'>
      Grundriss</a>
    </Fragment>

  )
}

export default Room
