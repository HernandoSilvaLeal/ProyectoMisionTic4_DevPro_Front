import { ApolloProvider } from "@apollo/client";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Browser from "./Router/Browser";
import { client } from "./helpers/ApolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <Browser />
    </ApolloProvider>
  );
}

export default App;
