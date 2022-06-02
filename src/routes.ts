import Chefs from "./pages/chefs/Chefs";
import Homepage from "./pages/homepage/Homepage";
import RestaurantDetails from "./pages/restaurants/RestaurantDetails";
import Restaurants from "./pages/restaurants/Restaurants";

export const routes = [
  {
    path: "/",
    element: Homepage,
  },
  {
    path: "/restaurants",
    element: Restaurants,
  },
  {
    path: "/restaurants/:id",
    element: RestaurantDetails,
  },
  {
    path: "/chefs",
    element: Chefs,
  },
];
