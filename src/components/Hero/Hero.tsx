import React from "react";
import { WelcomeHero, SearchHero } from "../../components/Hero/Hero.styled";
import { default as miniHero } from "../../assets/images/mobile-main-photo.png";

const Hero = () => {
  return (
    <WelcomeHero hero={miniHero}>
      <SearchHero>
        <h5>Epicure works with the top chefs restaurants in Tel-Aviv</h5>
        <form>
          <input
            type="text"
            placeholder="Search for restaurant cuisine, chef"
          />
        </form>
      </SearchHero>
    </WelcomeHero>
  );
};

export default Hero;
