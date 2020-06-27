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
    postsVisibility: false,
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

  togglePostHandler = () => {
    const isVisible = this.state.postsVisibility;
    this.setState({ postsVisibility: !isVisible });
  };

  render() {
    const style = {
      bacgroundColor: "white",
      font: "inherit",
      border: "2px solid #eee",
      padding: "8px",
      cursor: "pointer",
    };

    let posts = null;
    if (this.state.postsVisibility) {
      posts = (
        <div>
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

    return (
      <div className="App">
        <h1>React Posts!</h1>
        <button style={style} onClick={this.togglePostHandler}>
          Toggle Posts
        </button>
        {posts}
      </div>
    );
  }
}

export default App;
