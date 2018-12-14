import React from 'react';
import Form from '../form/form';

class Reply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.setFormText("@"+e+": ")
  }
  
render() {
    return (
      <div className="reply" onClick={()=>this.handleChange(this.props.username)}>
        <i className="fa fa-reply"></i>
      </div>
    );
  };
}



export default Reply;
