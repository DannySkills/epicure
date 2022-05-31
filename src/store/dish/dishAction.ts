import { AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { Dish } from "../../interfaces/dish";
import DishService from "../../services/dish.service";
import { RootStore } from "../store";
import {
  DishesDispatchTypes,
  DISHES_FAIL,
  DISHES_LOADING,
  DISHES_SUCCESS,
} from "./type";

// export const getDishes = (): ThunkAction<
//   void,
//   RootStore,
//   unknown,
//   AnyAction
// > => {
//   return async (dispatch: Dispatch<DishesDispatchTypes>) => {
//     try {
//       dispatch({ type: DISHES_LOADING });
//       dispatch({ type: DISHES_SUCCESS, payload: dishes });
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: DISHES_FAIL });
//     }
//   };
// };
