import React from "react";
import classes from "./Post.module.css";
const post = (props) => {
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error("Something went wrong");
  }
  return (
    <div className={classes.Post}>
      <h2 onClick={props.click}>{props.title}</h2>
      <p>{props.content}</p>
      <p>
        <i>{props.children}</i>
      </p>
      <input onChange={props.changed} value={props.title}></input>
    </div>
  );
};
export default post;
