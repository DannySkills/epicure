import React from "react";
import { NavLink } from "react-router-dom";
import Restaurant from "../../interfaces/restaurant";
import { TableContainer } from "./RestaurantsTable.styled";
import { RestaurantCard } from "../restaurants/RestaurantCard";
import { default as arrow } from "../../assets/images/arrow.svg";
interface RestaurantsTableProps {
  restaurants: Restaurant[];
}

const RestaurantsTable: React.FC<RestaurantsTableProps> = ({ restaurants }) => {
  if (!restaurants) return <div>Loading...</div>;
  return (
    <TableContainer>
      <h5>POPULAR RESTAURANTS IN EPICURE:</h5>
      <div className="restaurants">
        {restaurants
          .map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))
          .slice(0, 3)}
      </div>
      <div className="rest-nav">
        <NavLink to="/restaurants">All Restaurants</NavLink>
        <img src={arrow} alt="" />
      </div>
    </TableContainer>
  );
};

export default RestaurantsTable;
