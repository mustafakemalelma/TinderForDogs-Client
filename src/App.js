import React, { useEffect } from "react";
import { Spin } from "antd";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import BaseLayout from "./components/BaseLayout";

import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import { GET_ME } from "./graphql/queries";
import { AutoLoginContainer } from "./styles/common";

function App() {
  const { loading, data, client } = useQuery(GET_ME);

  useEffect(() => {
    if (data) client.writeData({ data: { auth: { __typename: "Auth", loggedIn: true } } });
  }, [data, client]);

  if (loading)
    return (
      <AutoLoginContainer>
        <Spin size="large" />
      </AutoLoginContainer>
    );

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
