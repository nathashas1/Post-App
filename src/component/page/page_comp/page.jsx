import React from 'react';
import Notify from '../notify';
import Form from '../form/form_container';
import Type from '../type/type_container';
import FormIndexItem from '../form/form_index_item';
import SlideShow from '../slide/slider';
import '../page.css'


class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: "all"};
  }


render() {
  const posts = this.props.posts.map(post => {

      return (
        <FormIndexItem
        key={post.id}
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
