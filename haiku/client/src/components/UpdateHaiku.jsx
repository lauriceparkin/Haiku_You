import React, { Component } from 'react'

export default class UpdateHaiku extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  componentDidMount() {
    this.setState({
      content: this.props.oneHaiku.content
    })
  }


  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.props.updateHaiku(this.state)
      }}>

        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button>submit</button>

      </form>
    )
  }
}
