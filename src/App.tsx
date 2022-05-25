import React from "react";
import GlobalStyle from "./Global.styled";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Homepage />
    </>
  );
};

export default App;
