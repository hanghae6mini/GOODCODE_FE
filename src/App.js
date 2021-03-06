import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { Provider } from "react-redux";

import store from "./redux/configStore";
// 가짜 import



function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;


