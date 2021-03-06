import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './shared/Navbar'
import { postHaiku } from '../services/apihelper'


class Post extends Component {
  constructor() {
    super();
    this.state = {
      haiku: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { target: { name, value } } = event

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const results = postHaiku(this.state.haiku, this.props.currentUser.id)

  }

  render() {
    const { haiku } = this.state
    return (
      <>

        <div className="post">
          <Navbar />

          <div className="haikubox">

            <h2>Write a Haiku!</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                {/* <label>Haiku Here:</label> */}
                <textarea className="haikuinput"
                  onChange={this.handleChange}
                  type="text"
                  value={haiku}
                  name="haiku"
                />
              </div>

              <div className="haikusubmit">

                <button>Submit</button>
              </div>

            </form>
          </div>

        </div>

        
      </>
    )
  }
}
export default Post;