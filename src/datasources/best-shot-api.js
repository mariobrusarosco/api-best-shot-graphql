const { RESTDataSource } = require("apollo-datasource-rest");

class BestShotAPI extends RESTDataSource {
  constructor() {
    super();

    this.memoizeGetRequests = false;

    // this.baseURL = "http://localhost:9090";
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
}

module.exports = BestShotAPI;
