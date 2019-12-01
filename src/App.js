import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import BaseLayout from "./components/BaseLayout";

import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/homepage" />} />

        <Route exact path="/homepage">
          <BaseLayout>
            <Homepage />
          </BaseLayout>
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
