import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

import "mapbox-gl/dist/mapbox-gl.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import config from "./utils/config";

const client = new ApolloClient({
  uri: `${
    config.NODE_ENV === "development"
      ? "http://localhost:8080/graphql"
      : "/graphql"
  }`,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
