import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './component/root';
import configureStore from './redux/store/store';
import { createPost } from "./redux/actions/actions";


document.addEventListener('DOMContentLoaded', () => {
  let store;
  const preloadedState = {
    posts: [ {user: 1, createdAt: Date.now() - 600000, id:1 , public: false, data:"Lorem ipsum dolor sit amet, id sea epicuri disputationi, malis dicat epicurei an mei."},
        {user: 2, createdAt: Date.now() - 600000, id:2 ,public: false, data:"An sed feugiat scripserit, te vide quidam tamquam vis, ex dicit oblique pri. Everti inimicus id eum, no soluta reprimique mel."},
        {user: 3, createdAt: Date.now() - 600000, id:3 ,public: false, data:"An sed feugiat scripserit, te vide quidam tamquam vis, ex dicit oblique pri. Everti inimicus id eum, no soluta reprimique mel."},
        {user: 4, createdAt: Date.now() - 600000, id:4 ,public: true, data:"Quam eu a nisl mi urna mattis parturient nulla sagittis nam ut pellentesque cubilia. Proin ante facilisi magna per integer fusce ipsum ."},
        {user: 5, createdAt: Date.now() - 600000, id:5 ,public: true, data:"Parturient vivamus eleifend curabitur eget morbi amet mollis tincidunt nisi consectetuer mus dapibus justo urna fames penatibus! nunc rutrum."},
        {user: 6, createdAt: Date.now() - 600000, id:6 ,public: true, data:"Magna ad ligula pharetra parturient fusce justo iaculis faucibus nunc amet fermentum rutrum a laore."}
      ],
    users: {
      1: {name: "john", photo: "https:randomuser.me/api/portraits/med/men/67.jpg"},
      2: {name: "mary", photo: "https:randomuser.me/api/portraits/med/men/65.jpg"},
      3: {name: "nico", photo: "https:randomuser.me/api/portraits/med/men/66.jpg"},
      4: {name: "nico", photo: "https:randomuser.me/api/portraits/med/men/68.jpg"},
      5: {name: "nico", photo: "https:randomuser.me/api/portraits/med/men/69.jpg"},
      6: {name: "nico", photo: "https:randomuser.me/api/portraits/med/men/64.jpg"}
    }
  }
  store = configureStore(preloadedState);

  window.post = (post) => store.dispatch(createPost(post));
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
