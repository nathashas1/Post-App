import { CREATE_POST, FETCH_POST } from '../actions/actions';



export default (oldState = [], action) => {
  console.log("old",oldState)
  Object.freeze(oldState);
  switch (action.type) {
    case CREATE_POST:
      return [...oldState, action.post];
    case FETCH_POST:
      return [...oldState, action.post];
    default:
      return oldState;
    }
}
