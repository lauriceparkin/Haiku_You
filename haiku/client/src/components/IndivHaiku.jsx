import React from 'react';
import { getComments, postComment, deleteComment, getOneHaiku, putHaiku } from '../services/apihelper'
import CreateComment from '../components/CreateComment'
import CommentList from '../components/CommentList'
import UpdateHaiku from '../components/UpdateHaiku'



export default class IndivHaiku extends React.Component {
  state = {
    comments: [],
    oneHaiku: null,
    isEdit: false
  }

  async componentDidMount() {
    const oneHaiku = await getOneHaiku(this.props.id)
    const comments = await getComments(this.props.id)
    this.setState({
      comments: comments,
      oneHaiku: oneHaiku,
    })
  }

  createComment = async (haiku_id, commentData) => {
    const newComment = await postComment(haiku_id, commentData);
    this.setState(prevState => ({
      comments: [...prevState.comments, newComment]
    }))
  }

  deleteComment = async (comment_id) => {
    await deleteComment(comment_id)
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => {
        return comment.id !== comment_id;
      })
    }))
  }

  updateHaiku = async (haiku_data) => {
    const updatedHaiku = await putHaiku(haiku_data, this.state.oneHaiku.id)
    this.setState({
      oneHaiku: updatedHaiku,
      isEdit: false
    })
  }

  render() {
    return (
      <>
        {

          this.state.oneHaiku &&
          <div className="onehaiku" id={this.state.oneHaiku.id}>

            {!this.state.isEdit
              ?
              <>
                <p>{this.state.oneHaiku.content}</p>
                <br />
                <button className="editbutton" onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                }}>edit your haiku</button>
              </>
              :

              <UpdateHaiku
                oneHaiku={this.state.oneHaiku}
                updateHaiku={this.updateHaiku}
              />

            }
            <br />
            <p>- {this.props.currentUser.username}</p>



            <CreateComment
              createComment={this.createComment}
              haiku_id={this.state.oneHaiku.id}
              currentUser={this.props.currentUser}
            />

            <CommentList
              haiku_id={this.state.oneHaiku.id}
              deleteComment={this.deleteComment}
              comments={this.state.comments}
            />
              

          </div>

          
        }

          
      </>
    )
  }


}










