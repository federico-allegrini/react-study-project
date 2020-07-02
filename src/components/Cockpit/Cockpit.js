import React from "react";
import classes from "./Cockpit.module.css";
const cockpit = (props) => {
  let pClasses = [];
  if (props.posts.length <= 2) {
    pClasses.push(classes.red);
  }
  if (props.posts.length <= 1) {
    pClasses.push(classes.bold);
  }
  let btnClasses = [classes.Button];
  if (props.postsVisibility) {
    btnClasses.push(classes.red);
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={pClasses.join(" ")}>List of posts.</p>
      <button className={btnClasses.join(" ")} onClick={props.clicked}>
        Toggle Posts
      </button>
    </div>
  );
};
export default cockpit;
