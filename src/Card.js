import React, { useState, useEffect } from "react";
import "./App.css";

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animatedDescription, setAnimatedDescription] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
    animateDescription(props.description);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setAnimatedDescription(" ");
  };

  const animateDescription = (text) => {
    if (text) {
      const words = text.split("##");
      let index = 0;

      const intervalId = setInterval(() => {
        setAnimatedDescription((prev) => prev + " " + words[index - 1]);
        const finalValue = setAnimatedDescription;
        index++;

        if (index === words.length) {
          clearInterval(intervalId);
          setAnimatedDescription(finalValue); // Clear the animated description
        }
      }, 150); // Adjust the interval based on your preference
    }
  };

  useEffect(() => {
    if (!isHovered) {
      setAnimatedDescription("");
    }
  }, [isHovered]);

  return (
    <div className="holder">
      <div
        className={`card ${props.alignRight ? "right" : "left"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-image">
          <img src={props.url} alt={props.urlAlt} title={props.titles} />
        </div>
        <div className="card-content">
          <h2>{props.title}</h2>
          <p>
            <b>{props.sesNum}</b> sessions for only <b>{props.price}$</b>.
            Sessions are held in <i>Google Meet</i>.
          </p>
        </div>
      </div>
      <h5 className={`cardDescription ${props.alignRight ? "left" : "right"}`}>
        {isHovered && (
          <div className={`animated-description`}>{animatedDescription}</div>
        )}
      </h5>
    </div>
  );
};

export default Card;
