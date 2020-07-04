import React, { Component } from "react";
import classes from "./Post.module.css";
class Post extends Component {
  render() {
    console.log("[Post.js] rendering...");
    return [
      <h2 key="i1" onClick={this.props.click}>
        {this.props.title}
      </h2>,
      <p key="i2">{this.props.content}</p>,
      <p key="i3">
        <i>{this.props.children}</i>
      </p>,
      <input
        key="i4"
        onChange={this.props.changed}
        value={this.props.title}
      ></input>,
    ];
  }
}
export default Post;
