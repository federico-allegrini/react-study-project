import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withClass from "../../../hoc/withClass";
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

Post.propTypes = {
  click: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  changed: PropTypes.func,
};

export default withClass(Post, classes.Post);
