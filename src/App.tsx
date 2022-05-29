import React from "react";
import GlobalStyle from "./Global.styled";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
