import React from "react";
import { AboutContainer } from "./About.styled";
import { default as logo } from "../../assets/images/epicure-logo.svg";
import { default as apple } from "../../assets/images/apple-icon.png";
import { default as google } from "../../assets/images/google-icon.png";

const About = () => {
  return (
    <AboutContainer>
      <div>
        <img className="logo" src={logo} alt="Epicure logo" />
      </div>
      <div>
        <div className="download">
          <div className="button">
            <img src={google} alt="google logo" />
            <div>
              <div className="line">Get it on</div>
              <div className="marka">Google Play</div>
            </div>
          </div>
          <div className="button">
            <img src={apple} alt="apple logo" />
            <div>
              <div className="line">Download on the</div>
              <div className="marka">App Store</div>
            </div>
          </div>
        </div>
        <span>About us:</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum.
        </p>
      </div>
    </AboutContainer>
  );
};

export default About;
