import React from 'react'

export default class CreateComment extends React.Component {
  state = {
    commentData: {
      comment_content: ""
    }
  }


  handleChange = (event) => {
    const { name, value } = event.target
    this.setState(prevState => ({
      commentData: {
        ...prevState.commentData,
        [name]: value
      }
    }))
  }

  render() {
    return (
      <>

        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.createComment(this.props.haiku_id, this.state.commentData)
        }}>

          <textarea
            name="comment_content"
            id="comment_content"
            placeholder="Enter your comment here:"
            value={this.state.commentData.comment_content}
            onChange={this.handleChange}
          />

          <button>Submit Comment</button>

        </form>

      </>

    )
  }

}