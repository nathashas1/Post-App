import { SET_FORM_TEXT } from '../actions/actions';



export default (oldState = "", action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SET_FORM_TEXT:
      return action.formText;
    default:
      return oldState;
    }
}
