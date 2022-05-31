import { restaurantService } from "../../services/restaurant.service";
import { AnyAction, Dispatch } from "redux";
import {
  RestaurantDispatchTypes,
  RESTAURANTS_FAIL,
  RESTAURANTS_LOADING,
  RESTAURANTS_SUCCESS,
} from "./type";
import Restaurant from "../../interfaces/restaurant";
import { DishesDispatchTypes, DISHES_SUCCESS } from "../dish/type";
import { ThunkAction } from "redux-thunk";
import { RootStore } from "../store";

export const getRestaurantsData = (): any => {
  return async (
    dispatch: Dispatch<RestaurantDispatchTypes | DishesDispatchTypes>
  ) => {
    try {
      dispatch({ type: RESTAURANTS_LOADING });
      const [restaurants, dishes] =
        await restaurantService.getRestaurantsAndDishes();
      dispatch({ type: RESTAURANTS_SUCCESS, payload: restaurants });
      dispatch({ type: DISHES_SUCCESS, payload: dishes });
    } catch (error) {
      console.log(error);
      dispatch({ type: RESTAURANTS_FAIL });
    }
  };
};
