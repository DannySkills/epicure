import { restaurantsData } from "../data/restaurants";
import DishService from "./dish.service";
import Restaurant from "../interfaces/restaurant";

const _fetchRestaurants = () => {
  return new Promise<Restaurant[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(restaurantsData);
    }, 2000);
  });
};

const getRestaurantsAndDishesData = () => {
  return Promise.all([_fetchRestaurants(), DishService.fetchDishes()]);
};

const RestaurantService = {
  getRestaurantsAndDishesData,
};

export default RestaurantService;
