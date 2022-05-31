import React from "react";
import Restaurant from "../../interfaces/restaurant";
import { Card } from "./RestaurantCard.styled";

type IRestaurant = {
  restaurant: Restaurant;
};

export const RestaurantCard: React.FC<IRestaurant> = ({ restaurant }) => {
  return (
    <Card>
      <img
        src={require(`../../${restaurant.thumb}`)}
        alt={restaurant.name}
        style={{
          objectFit: "cover",
          aspectRatio: "224 / 206",
        }}
      />
      <h2>{restaurant.name}</h2>
      <h3>{restaurant.chef}</h3>
    </Card>
  );
};
