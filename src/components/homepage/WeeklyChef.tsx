import React from "react";
import { WeeklyChefContainer } from "./WeeklyChef.styled";
import { chefData } from "../../data/chef";
import ChefRestaurantCarousel from "./ChefRestaurantCarousel";
import { Dish } from "../../interfaces/dish";

interface WeeklyChefProps {
  dishes: Dish[];
}

export const WeeklyChef: React.FC<WeeklyChefProps> = ({ dishes }) => {
  return (
    <WeeklyChefContainer>
      <h6>Chef of the week:</h6>
      <figure>
        <img src={require(`../../${chefData.image}`)} alt={chefData.name} />
        <figcaption>{chefData.name}</figcaption>
      </figure>
      <p>{chefData.description}</p>
      <ChefRestaurantCarousel dishes={dishes} />
    </WeeklyChefContainer>
  );
};
