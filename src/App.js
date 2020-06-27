import React, { Component } from "react";
import "./App.css";
import Post from "./Post/Post";

class App extends Component {
  state = {
    posts: [
      { id: "a1", title: "Post 1", content: "This is Post 1" },
      { id: "a2", title: "Post 2", content: "This is Post 2" },
    ],
    otherState: "Other",
    postsVisibility: false,
  };

  titleChangedHandler = (event, id) => {
    const postIndex = this.state.posts.findIndex((p) => {
      return p.id === id;
    });
    // const post = Object.assign({}, this.state.posts[postIndex]);
    const post = { ...this.state.posts[postIndex] };
    post.title = event.target.value;
    const posts = [...this.state.posts];
    posts[postIndex] = post;
    this.setState({ posts: posts });
  };

  togglePostHandler = () => {
    const isVisible = this.state.postsVisibility;
    this.setState({ postsVisibility: !isVisible });
  };

  deletePostHandler = (index) => {
    // const posts = this.state.posts.slice();
    const posts = [...this.state.posts];
    posts.splice(index, 1);
    this.setState({ posts: posts });
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
          {this.state.posts.map((post, index) => {
            return (
              <Post
                title={post.title}
                content={post.content}
                click={() => this.deletePostHandler(index)}
                changed={(event) => this.titleChangedHandler(event, post.id)}
                key={post.id}
              >
                {new Date().toLocaleDateString()}
              </Post>
            );
          })}
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
