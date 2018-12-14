import { connect } from 'react-redux';
// import React from 'react';
import { createPost } from '../../../redux/actions/actions';
import Page from './page';


const addUsersToPosts = (posts, users) => {
  posts  = posts.map(post => {
    return {
      ...post,
      user: users[post.user]
    }
  })
  return posts;
}

const filter = (posts) => {
  posts  = posts.filter(post => post.public)
  return posts;
}

const mapStateToProps = (state) => {
  return {
    posts: addUsersToPosts(state.posts, state.users)
    // posts: state.post
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
