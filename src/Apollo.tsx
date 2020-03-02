import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";


// GraphQL
const cache = new InMemoryCache({
  addTypename: false
});

// Write Cache
cache.writeData({
    data: {
      isLoggedIn: !!localStorage.getItem("token")
    }
});

const client = new ApolloClient({
    cache,
    link: new HttpLink({
      uri: "http://localhost:5000/graphql",
      headers: {
        "Authorization": localStorage.getItem("token"),
        "client-name": "Web App [web]",
        "client-version": "1.0.0"
      }
    }),
    resolvers,
    typeDefs
  });

  export default client;
  