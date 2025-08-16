import React from "react";
import "./Card.css";

const Card = ({ label, amount }) => {
  return (
    <div>
      <div className="card">
        <span className="card-label">{label}</span>

        <span className="card-value">{`₹${amount}`}</span>
      </div>
    </div>
  );
};

export default Card;