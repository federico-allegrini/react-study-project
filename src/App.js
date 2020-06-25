import React, { useState } from "react";
import "./App.css";
import Post from "./Post/Post";

const App = (props) => {
  const [postsState, setPostsState] = useState({
    posts: [
      { title: "Post 1", content: "This is Post 1" },
      { title: "Post 2", content: "This is Post 2" },
    ],
  });

  const [otherState, setOtherState] = useState("Other");

  const updatePostHandler = () => {
    setPostsState({
      posts: [
        { title: "Post M", content: "Post Mod" },
        { title: "Post 2", content: "This is Post 2" },
      ],
    });
  };

  return (
    <div className="App">
      <h1>React Posts!</h1>
      <button onClick={updatePostHandler}>Change Post</button>
      <Post
        title={postsState.posts[0].title}
        content={postsState.posts[0].content}
      />
      <Post
        title={postsState.posts[1].title}
        content={postsState.posts[1].content}
      >
        {new Date().toLocaleDateString()}
      </Post>
    </div>
  );
};

export default App;
