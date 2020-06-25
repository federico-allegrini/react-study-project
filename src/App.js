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

  updatePostHandler = (newTitle) => {
    this.setState({
      posts: [
        { title: newTitle, content: "Post Mod" },
        { title: "Post 2", content: "This is Post 2" },
      ],
    });
  };

  titleChangedHandler = (event) => {
    this.setState({
      posts: [
        { title: "Post 1", content: "This is Post 1" },
        { title: event.target.value, content: "This is Post 2" },
      ],
    });
  };

  render() {
    const style = {
      bacgroundColor: "white",
      font: "inherit",
      border: "2px solid #eee",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>React Posts!</h1>
        <button
          style={style}
          onClick={() =>
            this.updatePostHandler(
              "Post Button MOD! [Arrow Function - Not recommended]"
            )
          }
        >
          Change Post
        </button>
        <Post
          title={this.state.posts[0].title}
          content={this.state.posts[0].content}
          click={this.updatePostHandler.bind(
            this,
            "Post Paragraph Modified... [BIND - Best way]"
          )}
        />
        <Post
          title={this.state.posts[1].title}
          content={this.state.posts[1].content}
          changed={this.titleChangedHandler}
        >
          {new Date().toLocaleDateString()}
        </Post>
      </div>
    );
  }
}

export default App;
