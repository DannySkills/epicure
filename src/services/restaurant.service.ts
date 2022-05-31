import { restaurantsData } from "../data/restaurants";
import DishService from "./dish.service";
import Restaurant from "../interfaces/restaurant";

const fetchRestaurants = () => {
  return new Promise<Restaurant[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(restaurantsData);
    }, 2000);
  });
};

const getRestaurantsAndDishes = () => {
  return Promise.all([fetchRestaurants(), DishService.fetchDishes()]);
};

export const restaurantService = {
  fetchRestaurants,
  getRestaurantsAndDishes,
};
