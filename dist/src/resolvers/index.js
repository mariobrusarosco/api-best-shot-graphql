"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const League_1 = __importDefault(require("./League"));
const Mutation_1 = require("./Mutation");
const Query_1 = __importDefault(require("./Query"));
const resolvers = {
    Query: Query_1.default,
    Mutation: Mutation_1.Mutation,
    League: League_1.default,
};
exports.default = resolvers;
