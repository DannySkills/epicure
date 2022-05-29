import React from "react";
import { Dish } from "../../../interfaces/dish";
import { Card } from "./DishCard.styled";

interface DishCardProps {
  dish: Dish;
}

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <Card>
      {/* <img
        src={require(`../../../${dish.image}`)}
        alt={dish.name}
        style={{ objectFit: "cover", aspectRatio: "260 / 208" }}
      /> */}
      <img
        src={require(`../../../assets/images/dishes/masala-dosa.png`)}
        alt={dish.name}
        style={{ objectFit: "cover", aspectRatio: "260 / 208" }}
      />
      <div className="dish-details">
        <h1>{dish.name}</h1>
        <h4>{dish.ingredients}</h4>
        <img
          className="icon"
          src={require(`../../../${dish.icon}`)}
          alt={dish.name}
          height="34"
          width="44"
        />
        <div className="price">
          <div className="lines"></div>₪&nbsp;<h1>{dish.price}</h1>
          <div className="lines"></div>
        </div>
      </div>
    </Card>
  );
};
