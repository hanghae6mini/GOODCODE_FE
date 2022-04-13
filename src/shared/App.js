import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Header from "../components/Header";
import Login from "../pages/Login";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
// 가짜 import



function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/main" exact component={Main} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
