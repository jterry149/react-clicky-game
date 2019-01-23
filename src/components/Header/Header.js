// Import the required dependencies and files
import React from "react";
import "./Header.css";

// Set up the header for the clicky game app using props
const Header = props => (
    <div className="header">
        <div className="title">{props.children}</div>
        <div className="scores">
            Score: {props.score} Highscore: {props.highscore}
        </div>
    </div>
);

// Export the Header to the app
export default Header;