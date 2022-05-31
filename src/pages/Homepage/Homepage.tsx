import React, { useEffect } from "react";
import { HomepageContainer } from "./Homepage.styled";
import Hero from "../../components/homepage/hero/Hero";
import RestaurantsCarousel from "../../components/homepage/RestaurantsCarousel";
import DishesCarousel from "../../components/homepage/DishesCarousel";
import DishLabels from "../../components/homepage/dishes/DishLabels";
import { WeeklyChef } from "../../components/homepage/WeeklyChef";
import About from "../../components/homepage/About";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsAndDishes } from "../../store/restaurant/restaurant.action";
import { RootStore } from "../../store/store";
import MediaQuery from "react-responsive";
import RestaurantsTable from "../../components/homepage/RestaurantsTable";
import DishesTable from "../../components/homepage/DishesTable";

const Homepage = () => {
  const restaurants = useSelector(
    (state: RootStore) => state.restaurants.restaurants
  );
  const dishes = useSelector((state: RootStore) => state.dishes.dishes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantsAndDishes());
  }, []);

  const renderContent = () => {
    if (!restaurants || !dishes) {
      return <div>Loading...</div>;
    } else
      return (
        <>
          <Hero />
          <MediaQuery maxWidth={600}>
            <RestaurantsCarousel restaurants={restaurants} />
            <DishesCarousel dishes={dishes} />
          </MediaQuery>
          <MediaQuery minWidth={600}>
            <RestaurantsTable restaurants={restaurants} />
            <DishesTable dishes={dishes} />
          </MediaQuery>
          <DishLabels />
          <WeeklyChef dishes={dishes} />
          <About />
        </>
      );
  };
  return <HomepageContainer>{renderContent()}</HomepageContainer>;
};

export default Homepage;
