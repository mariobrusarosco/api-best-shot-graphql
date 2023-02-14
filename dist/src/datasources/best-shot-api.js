"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_rest_1 = require("@apollo/datasource-rest");
class BestShotAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://web-production-bc47.up.railway.app/";
    }
    getTournaments() {
        return this.get("/api/v1/tournament");
    }
    getAllLeagues() {
        return this.get("/api/v1/league");
    }
    getAllMembers() {
        return this.get("/api/v1/user");
    }
    updateMatch(matchId, matchData) {
        return this.patch(`/api/v1/match/${matchId}`, { body: matchData });
    }
}
exports.default = BestShotAPI;
