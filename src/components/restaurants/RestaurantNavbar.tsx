import React from "react";
import { NavLink } from "react-router-dom";
import Restaurant from "../../interfaces/restaurant";
import { NavContainer } from "./RestaurantNavbar.styled";

interface RestaurantNavbarProps {
  filteredRestaurants: Restaurant[] | null | undefined;
  filterRestaurants: any;
}

const RestaurantNavbar: React.FC<RestaurantNavbarProps> = ({
  filteredRestaurants,
  filterRestaurants,
}) => {
  return (
    <NavContainer>
      <h5>
        <NavLink
          className="clean-link"
          to="/restaurants"
          onClick={() => filterRestaurants("")}
        >
          All
        </NavLink>
      </h5>
      <h5>
        <NavLink
          className="clean-link"
          to="/restaurants/new"
          onClick={() => filterRestaurants("new")}
        >
          New
        </NavLink>
      </h5>
      <h5>
        <NavLink
          className="clean-link"
          to="/restaurants/most-popular"
          onClick={() => filterRestaurants("")}
        >
          Most Popular
        </NavLink>
      </h5>
      <h5>
        <NavLink
          className="clean-link"
          to="/restaurants/open-now"
          onClick={() => filterRestaurants("opennow")}
        >
          Open Now
        </NavLink>
      </h5>
    </NavContainer>
  );
};

export default RestaurantNavbar;
