import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import { Grid } from "../elements/ls_index";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { Provider } from "react-redux";

import store from "../redux/configStore";

function App() {

  return (
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <Grid>
            <Route path="/" exact component={Login}/>
            <Route path="/signUp" exact component={SignUp}/>
          </Grid>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
}

export default App;


