import { combineReducers } from 'redux';
import post from './post_reducer';
import type from './type_reducer';
import formText from './form_text_reducer';

// export default combineReducers({})

const rootReducer = combineReducers({
  post,
  type,
  formText
});

export default rootReducer;
