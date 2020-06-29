import React from "react";
import "./Post.css";
const post = (props) => {
  return (
    <div className="Post">
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
