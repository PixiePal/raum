import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Room from './components/room/Room'

import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/room/:id' component={Room} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
