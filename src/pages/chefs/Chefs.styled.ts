import styled from "styled-components";

export const ChefsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  h6 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    text-transform: uppercase;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  padding: 0 20px;

  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 20px 0;
    gap: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  figure {
    img {
      width: 100%;
      max-width: 300px;
      object-fit: cover;
    }
    figcaption {
      margin-top: -54px;
      padding: 10px 0;
      background-color: #fff;
      opacity: 0.8;
      font-family: "Helvetica Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      text-align: center;
      letter-spacing: 1.25px;
    }
  }
`;
