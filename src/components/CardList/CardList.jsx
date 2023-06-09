import React from "react";
import { Card } from "../Card/Card";
import "./index.css";

export const CardList = ({ cards, userId, handleLike }) => {


  return (
    <div className="cards">
      {cards.map((item) => {
        return <Card key={item.updated_at} {...item} product={item} userId={userId} handleLike={handleLike} />;
      })}
    </div>
  );
};
