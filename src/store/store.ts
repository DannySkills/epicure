import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import { dishReducer } from "./dish/dishReducer";
import { restaurantReducer } from "./restaurant/restaurantReducer";

const rootReducer = combineReducers({
  dishes: dishReducer,
  restaurants: restaurantReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootStore = ReturnType<typeof rootReducer>;
