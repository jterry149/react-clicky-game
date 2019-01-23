// Import the required files and dependencies
import React from "react";
import "./Card.css";

// Set up card layout using props
const Card = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

// Export the Cards
export default Card;