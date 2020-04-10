import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'
import showHaikus from '../services/apihelper'





class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      haikus: []
    }
  }

  componentDidMount = async () => {

    const response = await showHaikus()
    this.setState({
      haikus: response
    })

  
  }