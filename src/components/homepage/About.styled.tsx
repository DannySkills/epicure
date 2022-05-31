import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  z-index: 2;
  background-color: #fafafa;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-evenly;

  & span {
    text-align: left;
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }

  & p {
    text-align: left;
    font-size: 14px;
    font-weight: 200;
    font-family: "Helvetica Neue";
    font-style: normal;
    line-height: 20px;
  }

  .download {
    display: flex;
    flex-direction: column;

    .button {
      margin: 5px;
      padding: 5px 10px;
      border: 0.5px solid black;
      border-radius: 7px;
      display: flex;

      text-align: center;
      & img {
        margin-right: 5px;
      }
      .line {
        font-size: 9px;
      }
      .marka {
        font-size: 12px;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    flex-direction: column-reverse;
    span {
      order: 1;
    }
    .download {
      flex-direction: row;
    }
  }
`;
