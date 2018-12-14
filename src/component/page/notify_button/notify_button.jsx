import React from 'react';

class NotifyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.props.setFormText("renotify: ")
  }

render() {
    return (
      <div className="reply" onClick={()=>this.handleChange()}>
        <i className="fa fa-undo"></i>
      </div>
    );
  };
}



export default NotifyButton;
