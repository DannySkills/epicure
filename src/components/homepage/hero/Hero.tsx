import React from "react";
import { WelcomeHero, SearchHero } from "./Hero.styled";
import { default as miniHero } from "../../../assets/images/main-image.png";
import { default as search } from "../../../assets/images/search-icon.svg";

const Hero = () => {
  return (
    <WelcomeHero hero={miniHero}>
      <SearchHero>
        <p>Epicure works with the top chefs restaurants in Tel-Aviv</p>
        <div>
          <img src={search} alt="search" />
          <input
            type="text"
            placeholder="Search for restaurants cuisine, chef"
          />
        </div>
      </SearchHero>
    </WelcomeHero>
  );
};

export default Hero;
