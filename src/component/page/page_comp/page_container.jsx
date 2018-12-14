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


const filter = (posts, type) => {
  if (type === "all"){
  // posts  = posts
} else if (type === "public") {
  posts  = posts.filter(post => post.public)
} else {
  posts  = posts.filter(post => !post.public)
}
  return posts;
}

const mapStateToProps = ({ posts, users, type }) => {
  const postsWithUsers = addUsersToPosts(posts, users)
  const filteredPosts = filter(postsWithUsers,type)
  return {
    posts: filteredPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
