import React, { Component } from "react";
import classes from "./App.module.css";
import Posts from "../components/Posts/Posts";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    posts: [
      { id: "a1", title: "Post 1", content: "This is Post 1" },
      { id: "a2", title: "Post 2", content: "This is Post 2" },
      { id: "a3", title: "Post 3", content: "This is Post 3" },
    ],
    otherState: "Other",
    postsVisibility: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // Not recommended for use
  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

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
    console.log("[App.js] render");
    let posts = null;
    if (this.state.postsVisibility) {
      posts = (
        <div>
          <Posts
            posts={this.state.posts}
            clicked={this.deletePostHandler}
            changed={this.titleChangedHandler}
          />
        </div>
      );
    }

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            postsLength={this.state.posts.length}
            postsVisibility={this.state.postsVisibility}
            clicked={this.togglePostHandler}
          />
        ) : null}
        {posts}
      </WithClass>
    );
  }
}

export default App;
