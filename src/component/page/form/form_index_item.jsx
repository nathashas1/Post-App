import React from 'react';



const FormIndexItem = ({ post }) => {
  return (
    <div className="formItem">
      <img className="formleft" src={post.user.photo} alt=""/>
      <div className="formright">
          <div className="data">{post.data}</div>
          <div className="details">
              <div className="time">posted 10 min ago</div>
              <div className="name">{post.user.name}</div>
              <div className="reply"><i className="fa fa-reply"></i></div>
          </div>
      </div>
    </div>
)


};

export default FormIndexItem;
