import React from "react";
import Radium from "radium";
import "./Post.css";
const post = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
  return (
    <div className="Post" style={style}>
      <h2 onClick={props.click}>{props.title}</h2>
      <p>{props.content}</p>
      <p>
        <i>{props.children}</i>
      </p>
      <input onChange={props.changed} value={props.title}></input>
    </div>
  );
};
export default Radium(post);
