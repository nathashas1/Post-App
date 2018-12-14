import { connect } from 'react-redux';
import { createPost, setFormText } from '../../../redux/actions/actions';
import Reply from './reply';


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

export default connect(mapStateToProps, mapDispatchToProps)(Reply);
