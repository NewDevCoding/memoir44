import React from "react";
import "./CSSpages/card.css"

const Card = ({ userInfo }) => {
  const image = userInfo;
  return (
    <div className="card-container" >
      <img src={image} alt="display"></img>
    </div>
  );
};

export default Card;

