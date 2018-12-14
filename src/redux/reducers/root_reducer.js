import { combineReducers } from 'redux';
import posts from './post_reducer';
import type from './type_reducer';
import formText from './form_text_reducer';

// export default combineReducers({})

const rootReducer = combineReducers({
  posts,
  type,
  formText,
  users: (state = {}) => state,
  currentUser: () => 1
});

export default rootReducer;
