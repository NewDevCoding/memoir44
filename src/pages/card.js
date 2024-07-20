import React from "react";
import "./CSSpages/card.css"

const Card = ({ userInfo }) => {
  const image = userInfo;
  console.log(image)
  return (
    <div className="card-container">
      <img src={image}></img>
    </div>
  );
};

export default Card;

