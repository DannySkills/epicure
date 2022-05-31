import React from "react";
import { FooterContainer } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <a className="clean-link" href="#">
          Contact us
        </a>
      </div>
      <div>
        <a className="clean-link" href="#">
          Terms of Use
        </a>
      </div>
      <div>
        <a className="clean-link" href="#">
          Privacy Policy
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
