import styled from "styled-components";

export const Card = styled.div`
  margin: 5px;
  width: 100%;
  height: 100%;
  min-width: 150px;
  max-width: 200px;
  background: #f9f4ea;
  display: flex;
  flex-direction: column;
  flex: 1;

  h2 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 2.67px;
    padding: 0 10px;
  }
  h3 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 1.2px;
    padding: 0 10px;
  }
`;
