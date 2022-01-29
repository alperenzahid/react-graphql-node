"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = __importDefault(require("./schema"));
const resolver_1 = __importDefault(require("./resolver"));
// const typeDefs = `
//     type Query{
//         "Get 20 characters by filters and page number"
//         characters: String
//     }
// `;
// const resolvers = {
//     Query: {
//         characters: ()=>{
//             return "Test"
//         }
//     }
// };
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolver_1.default
});
server.listen()
    .then(({ url }) => `GraphQL Server listening on ${url}`)
    .then(console.log)
    .catch(console.error);
//# sourceMappingURL=index.js.map