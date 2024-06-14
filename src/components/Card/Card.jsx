import React from "react";
import Avatar from "../Avatar/Avatar";
import Description from "../Description/Description";

import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <Avatar />
      <Description />
    </div>
  );
};

export default Card;
