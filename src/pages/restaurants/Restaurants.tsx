import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardContainer, Container } from "./Restaurants.styled";
import { RootStore } from "../../store/store";
import { getRestaurantsAndDishes } from "../../store/restaurant/restaurant.action";
import { RestaurantCard } from "../../components/restaurants/RestaurantCard";
import RestaurantNavbar from "../../components/restaurants/RestaurantNavbar";
import Restaurant from "../../interfaces/restaurant";
import RestaurantsFilter from "../../components/restaurants/RestaurantsFilter";
import MediaQuery from "react-responsive";

const Restaurants = () => {
  const restaurants = useSelector(
    (state: RootStore) => state.restaurants.restaurants
  );
  const dispatch = useDispatch();
  const [filteredRestaurants, setFilteredRestaurants] = useState<
    Restaurant[] | null | undefined
  >([]);
  useEffect(() => {
    dispatch(getRestaurantsAndDishes());
    setFilteredRestaurants(restaurants);
  }, []);

  const temp = () => {
    console.log(filteredRestaurants);
  };

  if (!restaurants) return <div>Loading...</div>;
  return (
    <Container>
      <h6>Restaurants</h6>
      <RestaurantNavbar
        filteredRestaurants={filteredRestaurants}
        filterRestaurants={temp}
      />
      <MediaQuery minWidth={600}>
        <RestaurantsFilter />
      </MediaQuery>
      <CardContainer>
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant._id} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Restaurants;
