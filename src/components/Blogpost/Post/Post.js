import React from 'react'

const Post = ({ post, handleRemove, handleUpdate }) => {
  const { id, title, body } = post;
  return (
    <div className="post-group">
      <div className="post-content">
        <div className="img-thumb">
          <img src="https://placeimg.com/200/150/tech" alt="gambar"/>
        </div>

        <div className="content">
          <p className="title">{ title }</p>
          <p className="body">{ body }</p>
        </div>
      </div>

      <div className="btn-group">
        <button className="btn btn-update" onClick={ () => handleUpdate(post) }>Update</button>
        <button className="btn btn-remove" onClick={ () => handleRemove(id) }>Remove</button>
      </div>
    </div>
  )
}

export default Post;
