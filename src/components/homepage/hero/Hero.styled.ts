import styled from "styled-components";

export const WelcomeHero = styled.div`
  width: 100%;
  height: 269px;
  background: url(${(props: { hero: string }) => props.hero}) no-repeat center
    center;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchHero = styled.div`
  width: 90%;
  height: 46%;
  background-color: #fff;
  opacity: 0.88;
  padding: 0 10%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    font-family: "Helvetica Neue";
    font-weight: 200;
    font-size: 20px;
    line-height: 32px;
    margin-top: 10px;
    text-align: center;
  }

  input {
    margin: 15px 0;
    width: 230px;
    text-align: center;
  }
`;
