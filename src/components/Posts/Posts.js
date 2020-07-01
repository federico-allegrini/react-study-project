import React from "react";
import Post from "./Post/Post";
const posts = (props) =>
  props.posts.map((post, index) => {
    return (
      <Post
        title={post.title}
        content={post.content}
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, post.id)}
        key={post.id}
      >
        {new Date().toLocaleDateString()}
      </Post>
    );
  });
export default posts;
