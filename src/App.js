import React from "react";
//dependencies
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
//components
import Home from "./pages/Home";
import Header from "./layout/Header";

//styled-components
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
  }
  body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f2f2f2;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Route exact path="/" />
      </Router>

      <Home />
    </>
  );
}
