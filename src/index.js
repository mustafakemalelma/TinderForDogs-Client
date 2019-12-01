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

//Creates a local cache
const cache = new InMemoryCache();
//Creates an Apollo Client which will handle the graphql requests and responses.
const client = new ApolloClient({
  cache,
  link: createUploadLink({ uri: `${API_URL}/graphql`, credentials: "include" }),
  resolvers: {}
});

//Initial LOCAL CACHE data
const INITIAL_DATA = {
  auth: {
    __typename: "Auth",
    loggedIn: false
  }
};

cache.writeData({
  data: INITIAL_DATA
});
client.onClearStore(() => cache.writeData({ data: INITIAL_DATA }));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
