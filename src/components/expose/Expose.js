import React, {Component } from 'react'

import './expose.css'

import star from './star.svg'

class Stars extends Component {

  render () {
    let starList = []
    for (let i = 0; i < this.props.pieces; i++) {
      starList.push(<img key={i} className='star' src={star} alt='star' />)
    }
    return starList
  }
}

class InfoCard extends Component {
  render () {
    return (
      <div className='infoCard text-left'>
        <h1 className='title'><strong>{this.props.roomData.name}</strong></h1>

        <div>
          <p>Tel: {this.props.roomData.tel}</p>
          <p>Fax: {this.props.roomData.fax}</p>
        </div>

        <button type='button' className='btn btn-primary'>Buchen</button>

      </div>
    )
  }
}

class RoomDetails extends Component {
  render () {
    let roomData = this.props.roomData

    return (
      <div className='sizeDetails row justify-content-sm-center'>
        <div className='col-sm'>
          <h5><strong>Ausstattung</strong></h5>
          <p className=''><strong>Installiert: </strong>
            {roomData.equipment_installed.map((item, index) => (
              <span key={index}>{item} </span>))}
          </p>

          <p><strong>Auf Anfrage: </strong>
            {roomData.equipment_optional.map((item, index) => (
              <span key={index}>{item} </span>))}
          </p>
        </div>

        <div className='col-sm'>
          <h5><strong>Kapazität</strong></h5>
          <p><strong>Fläche: </strong>{roomData.area}</p>
          {roomData.seating.map((item, index) => (
            <p key={index}>{item.type}: bis zu <strong>{item.max}</strong> Personen</p>
        ))}
        </div>
      </div>
    )
  }
}

class Kontakt extends Component {
  render () {
    let roomData = this.props.roomData

    return (
      <div className='konstakt row justify-content-sm-center'>
        <div className='col-sm' >
          <h5><strong>Ihre Ansprechpartner: </strong></h5>
          <p>{roomData.contact.name}</p>
          <p>E-Mail: {roomData.contact.email}</p>
        </div>
        <form className='col-sm'>
          <h5><strong>Kontakt: </strong></h5>
          <div className='row'>
            <p className='col text-right'>Name: </p>
            <input className='col' />
          </div>
          <div className='row'>
            <p className='col text-right'>Nachricht: </p>
            <textarea className='col' rows='5' cols='40' name='message' />
          </div>

          <div className='row'>
            <p className='col' />
            <button type='submit' className='btn btn-primary'>Absenden</button>
          </div>

        </form>
      </div>
    )
  }
}

class MainRow extends Component {
  render () {
    return (
      <div className='firstRow row'>
        <div className='col-sm-9'>
          <iframe width='100%' height='480'
            title={this.props.roomData.id}
            src={this.props.model}
            frameBorder='0' allowFullScreen allow='vr' />
        </div>
        <div className='col-sm'>
          <InfoCard roomData={this.props.roomData} />
        </div>
      </div>
    )
  }
}

class Reviews extends Component {
  render () {
    return (
      <div>
        <h5><strong>Bewertungen:</strong></h5>
        <div className='row'>
          {this.props.roomData.reviews.map((item, index) => (
            <p className='col-sm-6' key={index}><Stars pieces={item.stars} /> {item.text} ({item.datum}) </p>
            ))}
        </div>
      </div>
    )
  }
}

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
      <section className='expose'>

        <MainRow roomData={roomData} model={model} />

        <div className='container detailRows'>

          <p>{roomData.description}</p>

          <RoomDetails roomData={roomData} />

          <Reviews roomData={roomData} />

          <Kontakt roomData={roomData} />

          <div>
          Placeholder for google maps {roomData.map_code} + {roomData.address}
          </div>

          <div>Web: <a href={website}>{roomData.website}</a></div>
        </div>
      </section>

    )
  }
}

export default Expose
