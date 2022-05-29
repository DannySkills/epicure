import React, { useState } from "react";
import Restaurant from "../../interfaces/restaurant";
import { restaurantsData } from "../../data/restaurants";
import { HomepageContainer } from "./Homepage.styled";
import Hero from "../../components/homepage/hero/Hero";
import RestaurantsCarousel from "../../components/homepage/RestaurantsCarousel";
import DishesCarousel from "../../components/homepage/DishesCarousel";
import DishLabels from "../../components/homepage/dishes/DishLabels";

const Homepage = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantsData);
  return (
    <HomepageContainer>
      <Hero />
      <RestaurantsCarousel restaurants={restaurants} />
      <DishesCarousel />
      <DishLabels />
    </HomepageContainer>
  );
};

export default Homepage;
