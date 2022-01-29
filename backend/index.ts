import {ApolloServer} from "apollo-server";
import  typeDefs from './schema';
import resolvers from './resolver';

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()
    .then(({url})=>`GraphQL Server listening on ${url}`)
    .then(console.log)
    .catch(console.error)