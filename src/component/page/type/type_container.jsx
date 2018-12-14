import { connect } from 'react-redux';
import { setType } from '../../../redux/actions/actions';
import Type from './type';



const mapDispatchToProps = dispatch => {
  return {
    setType: (type) => dispatch(setType(type))
  };
};

export default connect(null, mapDispatchToProps)(Type);
