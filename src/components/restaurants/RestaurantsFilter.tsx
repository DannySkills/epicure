import React from "react";
import { FilterContainer } from "./RestaurantsFilter.styled";

const RestaurantsFilter = () => {
  return (
    <FilterContainer>
      <div>
        <button>Price Range</button>
        <button>Distance</button>
        <button>Rating</button>
      </div>
    </FilterContainer>
  );
};

export default RestaurantsFilter;
