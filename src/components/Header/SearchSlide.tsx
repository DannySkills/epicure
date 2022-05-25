import React from "react";
import { SearchSlideContainer } from "./SearchSlide.styled";
import { default as x } from "../../assets/images/x.svg";

interface SearchSlideProps {
  isSearch: boolean;
  toggleSearch: () => void;
}

const SearchSlide: React.FC<SearchSlideProps> = ({
  isSearch,
  toggleSearch,
}) => {
  return (
    <SearchSlideContainer search={isSearch}>
      <img src={x} onClick={toggleSearch} className="nav-icon" />
      <h1>Search</h1>
      <form>
        <input type="text" placeholder="Search for restaurant cuisine, chef" />
      </form>
    </SearchSlideContainer>
  );
};

export default SearchSlide;
