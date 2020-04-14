import React from 'react'

export default function CommentList(props) {
  return (
    <div>
      {props.comments &&
        props.comments.map((comment) => (
          comment.poem_id === props.haiku_id && (
            <div key={comment.id}>
              <p>{comment.comment_content}</p>

              <button onClick={()=>props.deleteComment(comment.id)}>Delete Comment</button>

              </div>
        )
      ))
      } 


    </div>
)


}