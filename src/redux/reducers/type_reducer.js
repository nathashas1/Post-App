import { SET_TYPE } from '../actions/actions';



export default (oldState = "all", action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SET_TYPE:
      return action.filterValue;
    default:
      return oldState;
    }
}
