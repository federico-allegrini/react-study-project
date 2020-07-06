import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";
const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  // New variable for context
  const authContext = useContext(AuthContext);
  console.log("[Cockpit.js] authContext: ", authContext);

  useEffect(
    () => {
      console.log("[Cockpit.js] useEffect");
      // Http request...
      toggleBtnRef.current.click();
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
      <button
        ref={toggleBtnRef}
        className={btnClasses.join(" ")}
        onClick={props.clicked}
      >
        Toggle Posts
      </button>
      <br></br>
      <br></br>
      <button onClick={authContext.login} className={btnClasses.join(" ")}>
        Log In
      </button>
      {/* <button onClick={props.login} className={btnClasses.join(" ")}>
        Log In
      </button> */}
    </div>
  );
};
// In functional component React.memo() avoid re-rendering of component if props not change
export default React.memo(Cockpit);
