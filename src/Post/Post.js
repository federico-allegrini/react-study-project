import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
  width: 60%;
  margin: 20px auto;
  background: #222;
  border: 2px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;
const post = (props) => {
  return (
    <StyledDiv>
      <h2 onClick={props.click}>{props.title}</h2>
      <p>{props.content}</p>
      <p>
        <i>{props.children}</i>
      </p>
      <input onChange={props.changed} value={props.title}></input>
    </StyledDiv>
  );
};
export default post;
