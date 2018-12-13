import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './component/app/App';
import Root from './component/root';
import configureStore from './redux/store/store';
import { receivePost } from "./redux/actions/post_actions";


document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();

  window.post = (post) => store.dispatch(receivePost(post));
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
