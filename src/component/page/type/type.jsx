import React from 'react';

class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: "all"};
    console.log("in type", this.props)
  }

setFilterType(type){
  return() => {
    this.props.setType(type)
  };
}



render() {
  console.log("in type", this.props)
      return (
      <div className="type">
        <button className="typeOne" value="all" onClick={this.setFilterType("all")}>
          ALL
        </button>
        <button className="typeOne" value="public" onClick={this.setFilterType("public")}>
          PUBLIC
        </button>
        <button className="typeOne" value="private" onClick={this.setFilterType("private")}>
          PRIVATE
        </button>
      </div>
    );
  };
}

export default Type;
