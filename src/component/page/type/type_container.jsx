import { connect } from 'react-redux';
import React from 'react';
import { createPost } from '../../../redux/actions/actions';
import Form from '../form/form';


const mapStateToProps = ({ errors }) => {

  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
