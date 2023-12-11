// Card.js

import React from "react";
import "./App.css"; // Import the corresponding CSS file for styling

const Card = (props) => {
  return (
    <div className={`card ${props.alignRight ? "right" : "left"}`}>
      <div className="card-image">
        <img src={props.url} alt={props.urlAlt} title={props.titles} />
      </div>
      <div className="card-content">
        <h2> {props.title} </h2>
        <p>
          <b>{props.sesNum}</b> sessions for only <b>{props.price}$</b>.
          Sessions are held in <i>Google Meet</i>.
        </p>
      </div>
    </div>
  );
};

export default Card;
