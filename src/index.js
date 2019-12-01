import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";
import { API_URL } from "./utils";

import "./index.css";
import "antd/dist/antd.less";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: createUploadLink({ uri: `${API_URL}/graphql`, credentials: "include" }),
  resolvers: {}
});

cache.writeData({
  data: {
    auth: {
      __typename: "Auth",
      loggedIn: false
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
