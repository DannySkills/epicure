import styled from "styled-components";

export const DishesCarouselContainer = styled.div`
  max-width: 98vw;
  margin: 0 0 0 10px;
  padding: 40px 0 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & button {
    display: none !important;
  }
  h5 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 24px;
    padding-left: 20px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }
  .slick-slide > div {
    margin: 0 7px;
  }
`;
