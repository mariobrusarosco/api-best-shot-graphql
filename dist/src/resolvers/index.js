"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var League_1 = __importDefault(require("./League"));
var Query_1 = __importDefault(require("./Query"));
var resolvers = {
    Query: Query_1.default,
    League: League_1.default,
};
exports.default = resolvers;
