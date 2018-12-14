import React from 'react';

class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: "all"};
    console.log("select", this.state.filter)
  }

handleChange(e){
  this.setState({filter: e.target.value})
}

render() {
      return (
      <div className="type">
        <button className="typeOne" value="all" onClick={this.handleChange}>
          ALL
        </button>
        <button className="typeOne" value="public" onClick={this.handleChange}>
          PUBLIC
        </button>
        <button className="typeOne" value="private" onClick={this.handleChange}>
          PRIVATE
        </button>
      </div>
    );
  };
}

export default Type;
