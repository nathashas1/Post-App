import { connect } from 'react-redux';
import React from 'react';
import { createPost, setFormText } from '../../redux/actions/actions';
import Form from './form';


const mapStateToProps = ({ formText,currentUser }) => {

  return {
    formText,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    setFormText: (text) => dispatch(setFormText(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
