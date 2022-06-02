import React from "react";
import { NavLink } from "react-router-dom";
import { Dish } from "../../interfaces/dish";
import { DishCard } from "./dishes/DishCard";
import { TableContainer } from "./DishesTable.styled";
import { default as arrow } from "../../assets/images/arrow.svg";

interface DishesTableProps {
  dishes: Dish[];
  isDetailedRestaurant?: boolean;
}

const DishesTable: React.FC<DishesTableProps> = ({
  dishes,
  isDetailedRestaurant,
}) => {
  return (
    <TableContainer>
      {!isDetailedRestaurant ? (
        <>
          <h6>SIGNATURE DISH OF:</h6>
          <div className="dishes">
            {dishes
              .map((dish) => <DishCard key={dish._id} dish={dish} />)
              .slice(0, 3)}
          </div>
          <div className="rest-nav">
            <NavLink to="/restaurants">All Restaurants</NavLink>
            <img src={arrow} alt="" />
          </div>
        </>
      ) : (
        <div className="dishes">
          {dishes.map((dish) => (
            <DishCard key={dish._id} dish={dish} />
          ))}
        </div>
      )}
    </TableContainer>
  );
};

export default DishesTable;
