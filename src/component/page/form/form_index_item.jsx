import React from 'react';
import Reply from '../reply/reply_container';
import moment from 'moment';


const FormIndexItem = ({ post }) => {
  return (
    <div className="formItem">
      <img className="formleft" src={post.user.photo} alt=""/>
      <div className="formright">
          <div className="data">{post.data}</div>
          <div className="details">
              <div className="time">{moment(post.createdAt).fromNow(true)} ago</div>
              <div className="name">{post.user.name}</div>
              <Reply username={post.user.name}/>
          </div>
      </div>
    </div>
)


};

export default FormIndexItem;
