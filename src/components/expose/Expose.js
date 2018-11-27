import React, {Component, Fragment } from 'react'

import './expose.css'

class Expose extends Component {

  constructor (props) {
    super(props)
    this.state = {
      id: props.match.params.id
    }
  }

  render () {
    let roomData = this.props.details[this.state.id - 1]
    let model = 'https://my.matterport.com/show/?m=' + roomData.model_id
    let website = 'https://' + roomData.website

    return (
      <section className='container'>
        <iframe width='100%' height='480'
          title={roomData.id}
          src={model}
          frameBorder='0' allowFullScreen allow='vr' />

        <h1 className='title'>{roomData.name}</h1>

        <p>{roomData.description}</p>

        <div className='row'>
          <div className='oneColumn'>
            <h5>Ausstattung</h5>
            {roomData.equipment_installed.map((item, index) => (
              <span>{item}</span>
            ))}
            <br />
            <p>Auf Anfrage: </p>
            {roomData.equipment_optional.map((item, index) => (
              <span>{item}</span>
            ))}
          </div>
          <div className='oneColumn'>
            <h5>Kapazität</h5>
            <p>Fläche: {roomData.area}</p>
            {roomData.seating.map((item, index) => (
              <p>{item.type}: bis zu <strong>{item.max}</strong> Personen</p>
            ))}
          </div>
        </div>

        <div>
          <h3>Bewertungen:</h3>
          {roomData.reviews.map((item, index) => (
            <p><strong>{item.stars}</strong> {item.text} ({item.datum}) </p>
          ))}
        </div>

        <div>
          <h3>Ihre Ansprechpartner: </h3>
          <p>{roomData.contact.name}</p>
          <p>{roomData.contact.email}</p>
          <p>{roomData.tel}</p>
          <p>{roomData.fax}</p>
          <form>
            <p>Name: <input /></p>
            <p>Nachricht: <input /></p>
            <button type='submit' >Absenden</button>
          </form>
        </div>

        <div>
          Placeholder for google maps {roomData.map_code} + {roomData.address}
        </div>

        <div>
          Web: <a href={website}>{roomData.website}</a>
        </div>
      </section>

    )
  }
}

export default Expose
