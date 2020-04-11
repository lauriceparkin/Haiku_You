import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'


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
    const { target: { name, value} } = event

    this.setState({
      [name]: value
    })
  }

  //not complete, call Create Haiku function from api helper//inside handle submit function
  handleSubmit(event) {
    event.preventDefault()

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

        <Footer
        />

      </>
    )
  }
}
export default Post;