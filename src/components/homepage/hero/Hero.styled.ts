import styled from "styled-components";

export const WelcomeHero = styled.div`
  width: 100%;
  min-height: 269px;
  background: url(${(props: { hero: string }) => props.hero}) no-repeat center
    center;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 696px;
    background-size: cover;
  }
`;

export const SearchHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 335px;
  height: 144px;
  background-color: rgba(255, 255, 255, 0.88);

  p {
    font-family: "Helvetica Neue";
    font-weight: 200;
    font-size: 20px;
    line-height: 32px;
    margin-top: 16px 10px 64px;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    width: 300px;
    height: 32px;
    margin-top: 20px;
    margin-left: 7px;

    input {
      border: none;
      background-color: transparent;
      width: 253px;
      height: 15px;
      padding: 5px 5px 10px;
    }
    img {
      margin: 15px;
      width: 20px;
      height: 20px;
    }
  }
`;
