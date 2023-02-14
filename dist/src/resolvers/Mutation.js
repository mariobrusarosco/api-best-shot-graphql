"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
exports.Mutation = {
    updateMatch: (_, { matchId, match }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedMatch = yield dataSources.bestShotAPI.updateMatch(matchId, match);
            console.log({ matchId, match, updatedMatch });
            return {
                code: 200,
                success: true,
                message: "Match updated",
                match: updatedMatch,
            };
        }
        catch (error) {
            return {
                code: error.extensions.response.status,
                success: false,
                message: error.extensions.response.body,
                match: null,
            };
        }
    }),
};
