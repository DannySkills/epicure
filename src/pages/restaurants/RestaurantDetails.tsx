import React, { useEffect, useState } from "react";
import Restaurant from "../../interfaces/restaurant";
import { Container } from "./RestaurantDetails.styled";
import { useParams } from "react-router-dom";
import RestaurantService from "../../services/restaurant.service";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store/store";
import DishesTable from "../../components/homepage/DishesTable";
import { getDishes } from "../../store/dish/dish.action";
import { default as clock } from "../../assets/images/clock.svg";

const RestaurantsDetails = () => {
  const dishes = useSelector((state: RootStore) => state.dishes.dishes);
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const { id } = useParams();

  const loadRestaurant = async () => {
    const restaurant = await RestaurantService.getRestaurantById(id);
    setRestaurant(restaurant);
  };

  useEffect(() => {
    loadRestaurant();
    dispatch(getDishes());
  }, []);

  if (!restaurant || !dishes) return <div>Loading...</div>;
  return (
    <Container>
      <div className="logo-container">
        <img
          className="rest-logo"
          src={require(`../../${restaurant.image}`)}
          alt=""
        />
      </div>
      <div className="details">
        <h5>{restaurant.name}</h5>
        <h6>{restaurant.chef}</h6>
        <div className="rest-open">
          <img src={clock} alt="" />
          <p>Open now</p>
        </div>
      </div>

      <DishesTable dishes={dishes} isDetailedRestaurant={true} />
    </Container>
  );
};

export default RestaurantsDetails;
