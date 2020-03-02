import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// GraphQL
//import gql from "graphql-tag";
// Apollo
//import { ApolloProvider, useQuery } from "@apollo/react-hooks";
//import client from "./Apollo";
// Global CSS
import './App.styl'; 
// Routes - Secure/Unsecure
import SecureRouter from "./pages/secure/router-secure";
import UnsecureRouter from "./pages/unsecure/router-unsecure";

// Check Logged
//const IS_LOGGED_IN = gql`
  //query IsUserLoggedIn {
  //  isLoggedIn @client
  //}
//`;
const IsLoggedIn = () => {
  // const { data } = useQuery(IS_LOGGED_IN);
  // return data.isLoggedIn ? <SecureRouter /> : <UnsecureRouter />;
  return <UnsecureRouter />
};

// Render
render( 
  //<ApolloProvider client={client}>
    <Router>
      <IsLoggedIn />
    </Router>,
  //</ApolloProvider>,
  document.getElementById("root")
);
