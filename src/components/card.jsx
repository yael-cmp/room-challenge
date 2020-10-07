import React, { useEffect } from "react";
import "../assets/components/card.scss";
const Card = ({ imageUrl }) => {
  
  return (
    <div className="card">
      <img src={imageUrl} alt="" className="card--img" />
    </div>
  );
};
export default Card;
