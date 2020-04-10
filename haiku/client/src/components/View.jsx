import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'
import { showHaikus } from '../services/apihelper'



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

  render() {
    return (
      <div className="showHaikus">
        {
          this.state.haikus.length > 0 &&

          this.state.haikus.map((poem, index) => (

            <div key={index}>
              {poem.content}
              {poem.user.username}
            </div>
          )
          )
        }

      </div>

    )
  }

}

export default View;