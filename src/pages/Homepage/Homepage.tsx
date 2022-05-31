import React, { useState, useEffect } from "react";
import Restaurant from "../../interfaces/restaurant";
import { Dish } from "../../interfaces/dish";
import { HomepageContainer } from "./Homepage.styled";
import Hero from "../../components/homepage/hero/Hero";
import RestaurantsCarousel from "../../components/homepage/RestaurantsCarousel";
import DishesCarousel from "../../components/homepage/DishesCarousel";
import DishLabels from "../../components/homepage/dishes/DishLabels";
import { WeeklyChef } from "../../components/homepage/WeeklyChef";
import About from "../../components/homepage/About";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsData } from "../../store/restaurant/restaurantAction";
import { RootStore } from "../../store/store";
import { restaurantService } from "../../services/restaurant.service";

const Homepage = () => {
  const restaurants = useSelector(
    (state: RootStore) => state.restaurants.restaurants
  );
  const dishes = useSelector((state: RootStore) => state.dishes.dishes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantsData());
  }, []);

  const renderContent = () => {
    if (!restaurants || !dishes) {
      return <div>Loading...</div>;
    } else
      return (
        <>
          <Hero />
          <RestaurantsCarousel restaurants={restaurants} />
          <DishesCarousel dishes={dishes} />
          <DishLabels />
          <WeeklyChef dishes={dishes} />
          <About />
        </>
      );
  };
  return <HomepageContainer>{renderContent()}</HomepageContainer>;
};

export default Homepage;
