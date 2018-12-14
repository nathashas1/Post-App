import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './component/app/App';
import Root from './component/root';
import configureStore from './redux/store/store';
import { createPost } from "./redux/actions/actions";


document.addEventListener('DOMContentLoaded', () => {
  let store;
  const preloadedState = {
    posts: [ {user: 1,public: true, data:"Lorem ipsum dolor sit amet, id sea epicuri disputationi, malis dicat epicurei an mei."},
        {user: 2,public: true, data:"An sed feugiat scripserit, te vide quidam tamquam vis, ex dicit oblique pri. Everti inimicus id eum, no soluta reprimique mel."},
        {user: 3,public: false, data:"An sed feugiat scripserit, te vide quidam tamquam vis, ex dicit oblique pri. Everti inimicus id eum, no soluta reprimique mel."}
      ],
    users: {
      1: {name: "john", photo: "https:randomuser.me/api/portraits/med/men/67.jpg"},
      2: {name: "mary", photo: "https:randomuser.me/api/portraits/med/men/65.jpg"},
      3: {name: "nico", photo: "https:randomuser.me/api/portraits/med/men/66.jpg"}
    }
  }
  console.log("this is state", preloadedState)
  store = configureStore(preloadedState);

  window.post = (post) => store.dispatch(createPost(post));
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
