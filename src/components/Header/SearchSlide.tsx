import React from 'react';
import { SearchSlideContainer } from './SearchSlide.styled';
import { default as x } from '../../assets/images/x.svg';
import { default as search } from '../../assets/images/search-icon.svg';

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
      <div>
        <img src={search} className="search-icon" />
        <input type="text" placeholder="Search for restaurant cuisine, chef" />
      </div>
    </SearchSlideContainer>
  );
};

export default SearchSlide;
