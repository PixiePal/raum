import React, { Component, Fragment } from 'react'

import './room.css'

function Room ({ match }) {
  return (
    <Fragment>
      <p>This is a room for id: {match.params.id}</p>
    </Fragment>
  )
}

export default Room
