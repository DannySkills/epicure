import React from "react";
import { Dish } from "../../interfaces/dish";
import { ChefTable } from "./ChefRestaurantTable.styled";
import { DishCard } from "./dishes/DishCard";

interface ChefRestaurantTableProps {
  dishes: Dish[];
}

const ChefRestaurantTable: React.FC<ChefRestaurantTableProps> = ({
  dishes,
}) => {
  return (
    <ChefTable>
      {dishes
        .map((dish) => <DishCard key={dish._id} dish={dish} isChef={true} />)
        .slice(3, 6)}
    </ChefTable>
  );
};

export default ChefRestaurantTable;
