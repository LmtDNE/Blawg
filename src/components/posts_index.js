import React, {Component} from 'react';


class PostsIndex extends Component {

  componentWillMount() {
    console.log("This would be a good time to fetch an action creator");
  }
  render() {
    return (

        <div>List of Blog Posts</div>

      )
  }
}

export default PostsIndex;