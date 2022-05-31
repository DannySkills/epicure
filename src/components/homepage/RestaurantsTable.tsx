import React from "react";
import Restaurant from "../../interfaces/restaurant";
import { TableContainer } from "./RestaurantsTable.styled";
import { RestaurantCard } from "../restaurants/RestaurantCard";

interface RestaurantsTableProps {
  restaurants: Restaurant[];
}

const RestaurantsTable: React.FC<RestaurantsTableProps> = ({ restaurants }) => {
  if (!restaurants) return <div>Loading...</div>;
  return (
    <TableContainer>
      <h5>THE POPULAR RESTAURANTS IN EPICURE:</h5>
      <div className="restaurants">
        {restaurants
          .map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))
          .slice(0, 3)}
      </div>
    </TableContainer>
  );
};

export default RestaurantsTable;
