import { ApolloServer, gql } from "apollo-server-express";
import { graphql } from "graphql";

const typedefs = gql``;

const server = new ApolloServer({typedefs});

server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
})