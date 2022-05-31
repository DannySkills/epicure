import React from "react";
import { Dish } from "../../interfaces/dish";
import { DishCard } from "./dishes/DishCard";
import { TableContainer } from "./DishesTable.styled";

interface DishesTableProps {
  dishes: Dish[];
}

const DishesTable: React.FC<DishesTableProps> = ({ dishes }) => {
  return (
    <TableContainer>
      <h6>SIGNATURE DISH OF:</h6>
      <div className="dishes">
        {dishes
          .map((dish) => <DishCard key={dish._id} dish={dish} />)
          .slice(0, 3)}
      </div>
    </TableContainer>
  );
};

export default DishesTable;
