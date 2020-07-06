import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withClass from "../../hoc/withClass";
import classes from "./Post.module.css";
import AuthContext from "../../context/auth-context";
class Post extends Component {
  constructor(props) {
    super(props);
    this.h2ElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // Click on last h2 element and delete the Post
    this.h2ElementRef.current.click();
    // Focus on last input element
    this.inputElement.focus();
    // New property
    console.log("[Post.js] AuthContext: ", this.context);
  }

  render() {
    console.log("[Post.js] rendering...");
    return (
      <Fragment>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}
        {/* {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>} */}
        <h2 ref={this.h2ElementRef} onClick={this.props.click}>
          {this.props.title}
        </h2>
        <p>{this.props.content}</p>
        <p>
          <i>{this.props.children}</i>
        </p>
        <input
          ref={(inputEl) => (this.inputElement = inputEl)}
          onChange={this.props.changed}
          value={this.props.title}
        ></input>
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
