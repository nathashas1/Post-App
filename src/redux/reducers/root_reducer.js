import { combineReducers } from 'redux';
import post from './post_reducer';

// export default combineReducers({})

const rootReducer = combineReducers({
  post
});

export default rootReducer;
