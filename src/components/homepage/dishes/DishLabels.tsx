import React from "react";
import { LabelsWrapper, Overlay } from "./DishLabels.styled";
import { default as spicy } from "../../../assets/images/spicy-icon.svg";
import { default as vegetarian } from "../../../assets/images/vegetarian-icon.svg";
import { default as vegan } from "../../../assets/images/vegan-icon.svg";

const DishLabels = () => {
  return (
    <Overlay>
      <h6>Signature dish of:</h6>
      <LabelsWrapper>
        <div>
          <img src={spicy} alt="Spicy" width="44" />
          <p>Spicy</p>
        </div>
        <div>
          <img src={vegetarian} alt="Vegetarian" width="33" />
          <p>Vegetarian</p>
        </div>
        <div>
          <img src={vegan} alt="Vegan" width="37" />
          <p>Vegan</p>
        </div>
      </LabelsWrapper>
    </Overlay>
  );
};

export default DishLabels;
