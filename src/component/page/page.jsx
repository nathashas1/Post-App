import React from 'react';
import Notify from './notify';
import Form from './form_container';
import Type from './type';
import FormIndexItem from './form_index_item';
import SlideShow from './slide_show';
import './page.css'


class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: "all"};
    console.log("props", this.props)
  }

  componentDidMount() {
   // this.props.fetchPosts(this.state);
   }


  // handleChange(e){
  //   this.setState({text: e.target.value})
  // }
  //
  // handleClick() {
  //   return (e) => {
  //     e.preventDefault();
  //     this.props.createPost();
  //   };
  // }

render() {
  const posts = this.props.posts.map(post => {

      return (
        <FormIndexItem
          post={post}/>
      );
    });
  return (
    <div className="formContainer">
      <div className="form">
        <Notify />
        <div className="sections">
          <div className="left">
            <Form />
            <Type />
            <ul className="allforms">
              {posts}
            </ul>
          </div>
          <div className="right">
            <SlideShow />
          </div>
        </div>

      </div>
    </div>
    );
  }
}


export default Page;
