import React from 'react';



const FormIndexItem = ({ post }) => {
  return (
    <div className="formItem">
      <img className="formleft" src={post.photo} />
      <div className="formright">
          <div className="data">{post.data}</div>
          <div className="details">
              <div className="time">posted 10 min ago</div>
              <div className="name">{post.username}</div>
              <div className="reply"><i className="fa fa-reply"></i></div>
          </div>
      </div>
    </div>
)


};

export default FormIndexItem;
