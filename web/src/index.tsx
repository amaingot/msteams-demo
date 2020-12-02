import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import App from "./App";
import config from "./utils/config";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: `${
    config.NODE_ENV === "development"
      ? "http://localhost:8080/graphql"
      : "/graphql"
  }`,
});

ReactDOM.render(
  <ApolloProvider client={client as any}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals(console.log);
