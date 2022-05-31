import styled from "styled-components";

export const SearchSlideContainer = styled.div`
  display: flex;
  top: 0;
  left: ${(props: { search: boolean }) => (props.search ? "0%" : "-100%;")};
  transition: left 0.2s;
  height: 367px;
  width: 100%;
  padding: 3% 10% 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 100;
  font-family: "Helvetica Neue";
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  position: fixed;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    margin: 3% 8%;
  }

  & input {
    width: 280px;
    text-align: center;
    padding: 5px 0;
  }
`;
