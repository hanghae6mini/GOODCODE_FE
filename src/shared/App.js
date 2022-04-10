import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import { Grid } from "../elements";

import Login from "../components/Login";
import signUp from "../components/SignUp";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Grid>
          <Route path="/" exact component={Login}/>
          <Route path="/signup" exact component={signUp}/>
        </Grid>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;


