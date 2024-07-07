import React from "react";
import "./abacus.css"

const Card = ({ userInfo }) => {
  const { name, order } = userInfo;
  return (
    <div style={{backgroundColor: "#99cfa4", paddingBottom: 5, }} className="card-container">
      <p>{name}</p>({order})
    </div>
  );
};

export default Card;

