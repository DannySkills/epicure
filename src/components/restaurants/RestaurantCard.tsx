import React from "react";
import { NavLink } from "react-router-dom";
import Restaurant from "../../interfaces/restaurant";
import { Card } from "./RestaurantCard.styled";
import { default as stars } from "../../assets/images/star.svg";
import { default as emptystar } from "../../assets/images/empty-star.svg";

type IRestaurant = {
  restaurant: Restaurant;
};

export const RestaurantCard: React.FC<IRestaurant> = ({ restaurant }) => {
  return (
    <Card>
      <NavLink className="clean-link" to={`/restaurants/${restaurant._id}`}>
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
        <div className="stars">
          {[...Array(restaurant.stars)].map((_, i) => (
            <img src={stars} alt="" key={i} />
          ))}
          {[...Array(5 - restaurant.stars)].map((_, i) => (
            <img src={emptystar} alt="" key={i} />
          ))}
        </div>
      </NavLink>
    </Card>
  );
};
