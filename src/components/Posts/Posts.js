import React, { Component } from "react";
import Post from "./Post/Post";
class Posts extends Component {
  render() {
    console.log("[Posts.js] rendering...");
    return this.props.posts.map((post, index) => {
      return (
        <Post
          title={post.title}
          content={post.content}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, post.id)}
          key={post.id}
        >
          {new Date().toLocaleDateString()}
        </Post>
      );
    });
  }
}
export default Posts;
