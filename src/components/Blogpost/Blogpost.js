import React, { Component, Fragment } from 'react';
import "./Blogpost.css";
import Post from './Post/Post';
import API from '../../services/Services';

class Blogpost extends Component {
  state = {
    posts: [], 
    singlePost: {
      id: 1, 
      title: "", 
      body: "", 
      userId: 1
    },
    isUpdate: false
  }

  getPostAPI = () => {
    API.getFormBlog()
      .then(res => {
        this.setState({ posts: res })
      })
  }

  postDataToAPI = () => {
    API.postFormBlog(this.state.singlePost)
      .then(res => {
        this.getPostAPI();
      })
  }

  putDataAPI = () => {
    API.updateFormBlog(this.state.singlePost, this.state.singlePost.id)
      .then(res => {
        this.getPostAPI();
      })
  }

  handleRemove = (id) => {
    API.deleteFormBlog(id)
      .then(() => {
        this.getPostAPI();
      })
  }

  // HANDLE CHANGE
  handleChange = (e) => {
    let singlePost = { ...this.state.singlePost }
    let id = new Date().getTime();
    
    if(!this.state.isUpdate) {
      singlePost["id"] = id;
    }
    
    singlePost[e.target.id] = e.target.value;

    this.setState({ singlePost });
  }
  // ---

  // HANDLE SUBMIT
  handleSubmit = (e) => {
    e.preventDefault();

    if(this.state.isUpdate) {
      this.putDataAPI();
    } else { 
      this.postDataToAPI();
    }

    this.setState({
      singlePost: {
        id: 1, 
        title: "", 
        body: "", 
        userId: 1
      }, 
      isUpdate: false
    })
  }
  // ---

  // UPDATE POST
  handleUpdate = (data) => {
    console.log(data);

    this.setState({
      singlePost: data, 
      isUpdate: true
    })
  }

  handleCancel = () => {
    this.setState({
      singlePost: {
        id: 1, 
        title: "", 
        body: "", 
        userId: 1
      }, 
      isUpdate: false
    })
  }
  // ---

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <div className="container">  
          <form className="form-add-post" onSubmit={ this.handleSubmit }>
            <h2 className="section-title">Blog Post</h2>
            <div className="line-title" />

            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              id="title" 
              placeholder="Add Title"
              autoComplete="off"
              value={ this.state.singlePost.title }
              onChange={ this.handleChange }
            />

            <label htmlFor="body">Content</label>
            <textarea
              id="body"
              cols="30"
              rows="10"
              placeholder="Add Content"
              value={ this.state.singlePost.body }
              onChange={ this.handleChange }
            />

            <div className="btn-group">
              {this.state.isUpdate ? (
                <>
                  <button className="btn btn-update">Update</button>
                  <button className="btn btn-update cancel" onClick={ this.handleCancel }>Cancel Update</button>
                </>
              ) : (
                <button className="btn btn-save">Save</button>
              )}
            </div>
          </form>
          
          <div className="posts">
            {this.state.posts.map(post => {
              return (
                <Post 
                  key={ post.id } 
                  post={ post }
                  handleRemove={ this.handleRemove }
                  handleUpdate={ this.handleUpdate }
                />
              )
            })}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Blogpost;