import React, { Component, Fragment } from "react";
import classes from "./Post.module.css";
class Post extends Component {
  render() {
    console.log("[Post.js] rendering...");
    return (
      <Fragment>
        <h2 onClick={this.props.click}>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <p>
          <i>{this.props.children}</i>
        </p>
        <input onChange={this.props.changed} value={this.props.title}></input>
      </Fragment>
    );
  }
}
export default Post;
