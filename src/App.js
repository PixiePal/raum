import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Room from './components/room/Room'

import data from './data.json'

import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/room/:id'
            render={(props) => <Room {...props} details={data} />}
          />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
