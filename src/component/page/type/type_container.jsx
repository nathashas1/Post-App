import { connect } from 'react-redux';
import React from 'react';
import { createPost, setType } from '../../../redux/actions/actions';
import Type from './type';



const mapStateToProps = ({ errors }) => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    setType: (type) => dispatch(setType(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Type);
