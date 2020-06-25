import React, { Component } from "react";
import "./App.css";
import Post from "./Post/Post";

class App extends Component {
  state = {
    posts: [
      { title: "Post 1", content: "This is Post 1" },
      { title: "Post 2", content: "This is Post 2" },
    ],
    otherState: "Other",
  };

  updatePostHandler = () => {
    this.setState({
      posts: [
        { title: "Post M", content: "Post Mod" },
        { title: "Post 2", content: "This is Post 2" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Posts!</h1>
        <button onClick={this.updatePostHandler}>Change Post</button>
        <Post
          title={this.state.posts[0].title}
          content={this.state.posts[0].content}
        />
        <Post
          title={this.state.posts[1].title}
          content={this.state.posts[1].content}
        >
          {new Date().toLocaleDateString()}
        </Post>
      </div>
    );
  }
}

export default App;
