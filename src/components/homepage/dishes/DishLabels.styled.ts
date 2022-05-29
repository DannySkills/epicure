import styled from "styled-components";

export const LabelsWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  @media only screen and (max-width: 480px) {
    gap: 40px;
  }
  @media only screen and (max-width: 320px) {
    gap: 30px;
  }
  @media only screen and (max-width: 280px) {
    gap: 10px;
  }
  div {
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  background-color: #fafafa;
  padding: 0 20px;
  h6 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }
`;
