import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(e){
    if (this.props.formText.length <= 140){
    this.props.setFormText(e.target.value)
    }
  }

  handleClick() {
    return (e) => {
      e.preventDefault();
      let post;
      if (this.props.type === "private"){
         post = {id: Date.now(), createdAt: Date.now(), data:this.props.formText, user: this.props.currentUser, public:false}
      } else {
         post = {id: Date.now(), createdAt: Date.now(), data:this.props.formText, user: this.props.currentUser, public:true}
      }
      this.props.createPost(post);
      this.props.setFormText("")

    };
  }

render() {
  return (
  <div className="postContainer">
    <input className="input" type="text" value={this.props.formText} placeholder="Say something..." onChange={this.handleChange}/>
    <button className="post" type="submit" onClick={this.handleClick()} >Post</button>
  </div>
);
};
}

export default Form;
