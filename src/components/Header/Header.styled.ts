import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 45px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;

  & div {
    display: flex;
    position: relative;
    &.logo {
      position: absolute;
      left: 45%;
    }
    & img {
      width: 32px;
      height: 32px;
      &.nav-icon {
        width: 20px;
        height: 20px;
        margin: 5px;
      }
    }
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  z-index: 100;
`;

export const OpeningMenu = styled.div`
  display: flex;
  top: 0;
  transition: left 0.2s;
  left: ${(props: { menu: boolean }) => (props.menu ? "0%" : "-100%;")};
  height: 367px;
  width: 100%;
  padding: 3% 10% 50%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  position: fixed;
  background: #fff;
  z-index: 100;
  font-family: "Helvetica Neue";
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  & a {
    text-decoration: none;
    cursor: pointer;
  }
  & hr {
    width: 53%;
  }
  & div {
    display: flex;
    flex-direction: column;
    align-items: start;
    opacity: 0.3;
    & hr {
      width: 100vw;
    }
    & img {
      position: absolute;
      top: 0;
      left: 0;
      margin: 3% 8%;
    }
  }
`;
