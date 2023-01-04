"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var typeDefs = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    tournaments: [Tournament!]\n    tournament(id: ID!): Tournament\n    leagues: [League!]!\n  }\n\n  type Tournament {\n    id: ID!\n    label: String!\n    description: String!\n    flag: String!\n  }\n\n  type League {\n    id: ID!\n    label: String!\n    members: [Member!]!\n  }\n\n  type Member {\n    id: ID!\n    email: String!\n  }\n\n  type Match {\n    id: ID!\n    host: String!\n    visitor: String!\n    date: String!\n    tournamentId: String!\n    stadium: String!\n  }\n"], ["\n  type Query {\n    tournaments: [Tournament!]\n    tournament(id: ID!): Tournament\n    leagues: [League!]!\n  }\n\n  type Tournament {\n    id: ID!\n    label: String!\n    description: String!\n    flag: String!\n  }\n\n  type League {\n    id: ID!\n    label: String!\n    members: [Member!]!\n  }\n\n  type Member {\n    id: ID!\n    email: String!\n  }\n\n  type Match {\n    id: ID!\n    host: String!\n    visitor: String!\n    date: String!\n    tournamentId: String!\n    stadium: String!\n  }\n"])));
exports.default = typeDefs;
var templateObject_1;
