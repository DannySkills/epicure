import styled from "styled-components";

export const TableContainer = styled.div`
  margin: auto;
  padding: 40px 0 50px;
  display: flex;
  flex: 0;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  .dishes {
    display: flex;
    flex: 0;
    justify-content: center;
  }
  h6 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 24px;
    padding-left: 20px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }
`;
