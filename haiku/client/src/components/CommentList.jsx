import React from 'react'
import { Link } from 'react-router-dom'


export default function CommentList(props) {
  return (
    <div>
      {props.comments &&
        props.comments.map((comment) => (
          comment.poem_id === props.haiku_id && (
            <div className="centercomment" key={comment.id}>
              <p className="comment">{comment.comment_content}</p>

              <button onClick={() => props.deleteComment(comment.id)}>delete comment</button>
              

              <Link style={{ textDecoration: 'none' }} to="/View" className="back">still no zen?<br /> go back and try again.</Link>

              </div>
        )
      ))
      } 

    </div>
)


}