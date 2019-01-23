// Import the dependencies and other files needed
import React from "react";
import "./Wrapper.css";

// Set up the Wrapper using props
const Wrapper = props => 
    <div className="wrapper">{props.children}</div>;

// Export Wrapper
export default Wrapper;