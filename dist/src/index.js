"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var schema_1 = __importDefault(require("./schema"));
var resolvers_1 = __importDefault(require("./resolvers"));
var BestShotAPI = require("./datasources/best-shot-api");
var server = new apollo_server_1.ApolloServer({
    introspection: true,
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    dataSources: function () {
        return {
            BestShotAPI: new BestShotAPI(),
        };
    },
    context: {
        test: "Lorem ipsum",
    },
});
server
    .listen({ port: process.env.PORT || 4000 })
    .then(function (_a) {
    var url = _a.url;
    console.log("\n    \uD83D\uDE80  Server is ready at ".concat(url, "\n    \uD83D\uDCED  Query at https://api-dev-best-shot.herokuapp.com/\n  "));
});
