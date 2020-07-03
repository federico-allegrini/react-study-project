import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";
const Cockpit = (props) => {
  useEffect(
    () => {
      console.log("[Cockpit.js] useEffect");
      // Http request...
      setTimeout(() => {
        alert("Saved data to cloud!");
      }, 1000);
      return () => {
        // With no 2nd argument empty arr [] run this function BEFORE removing components
        console.log("[Cockpit.js] cleanup work in useEffect");
      };
    },
    //Run useEffect when changed props.posts
    //Empty arr [] run useEffect only when created
    []
  );

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      // With no 2nd argument run this function BEFORE every main useEffect but A
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  // useEffect();

  let pClasses = [];
  if (props.postsLength <= 2) {
    pClasses.push(classes.red);
  }
  if (props.postsLength <= 1) {
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
// In functional component React.memo() avoid re-rendering of component if props not change
export default React.memo(Cockpit);
