import React from "react";
const post = (props) => (
  <div>
    <h2 onClick={props.click}>{props.title}</h2>
    <p>{props.content}</p>
    <p>
      <i>{props.children}</i>
    </p>
  </div>
);
export default post;
