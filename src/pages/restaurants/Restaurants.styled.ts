import styled from "styled-components";

export const Container = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h6 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 1.92px;
    text-transform: uppercase;
  }
  @media only screen and (min-width: 600px) {
    h6 {
      display: none;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 20px;
    grid-gap: 20px;
  }
`;
