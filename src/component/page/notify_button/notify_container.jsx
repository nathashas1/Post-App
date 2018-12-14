import { connect } from 'react-redux';
import { createPost, setFormText } from '../../../redux/actions/actions';
import Notify from './notify_button';




const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    setFormText: (text) => dispatch(setFormText(text))
  };
};

export default connect(null, mapDispatchToProps)(Notify);
