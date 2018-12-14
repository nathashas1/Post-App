import React from 'react';



class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: "all"};
    console.log("props", this.props)
  }

  componentDidMount() {
   // this.props.fetchPosts(this.state);
   }

   render() {
     return(
       <div>
         <div className="postImage">
           <img src="http://zenandsomething.files.wordpress.com/2014/06/day7-131.jpg?w=356&h=236" className="slideimg"/>
         </div>
         <div className="imageTitle">Image title</div>
       </div>
     )
   }
 }

 export default SlideShow;
