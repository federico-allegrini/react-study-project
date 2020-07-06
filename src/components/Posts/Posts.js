import React, { PureComponent } from "react";
import Post from "./Post/Post";
// PureComponent is like shouldComponentUpdate that check all props
class Posts extends PureComponent {
  // Not recommended with initial state undefined
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Posts.js] getDerivedStateFromProps");
  //   return state;
  // }

  // Not recommended for use
  // componentWillReceiveProps(props) {
  //   console.log("[Posts.js] componentWillReceiveProps");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Posts.js] shouldComponentUpdate");
  //   //Update this component only if the props "posts" change
  //   if (
  //     nextProps.posts !== this.props.posts ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Posts.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  // Not recommended for use
  // componentWillUpdate() {
  //   console.log("[Posts.js] componentWillUpdate");
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Posts.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Posts.js] componentWillUnmount");
  }

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
          // isAuth={this.props.isAuthenticated}
        >
          {new Date().toLocaleDateString()}
        </Post>
      );
    });
  }
}
export default Posts;
