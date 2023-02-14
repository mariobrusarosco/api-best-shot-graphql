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
const Query = {
    tournaments: (_, __, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
        const tournaments = yield dataSources.bestShotAPI.getTournaments();
        const mappedTournaments = tournaments.map((tournament) => (Object.assign({ id: tournament._id }, tournament)));
        return mappedTournaments;
    }),
    tournament: (_, args, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
        const tournaments = yield dataSources.bestShotAPI.getTournaments();
        const tournament = tournaments.find((tournament) => (tournament === null || tournament === void 0 ? void 0 : tournament.id) === (args === null || args === void 0 ? void 0 : args.ID));
        return (tournament !== null && tournament !== void 0 ? tournament : {
            label: "",
            description: "",
            flag: "",
        });
    }),
    leagues: (_, args, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
        const leagues = yield dataSources.bestShotAPI.getAllLeagues();
        const mapppedleagues = leagues.map((league) => (Object.assign({ id: league._id }, league)));
        return mapppedleagues;
    }),
};
exports.default = Query;
