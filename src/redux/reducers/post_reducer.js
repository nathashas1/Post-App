import { CREATE_POST } from '../actions/post_actions';


export default (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case CREATE_POST:
      return [...oldState, action.post];
    default:
      return oldState;
    }
}
