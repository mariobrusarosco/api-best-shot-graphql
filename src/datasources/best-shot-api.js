const { RESTDataSource } = require('apollo-datasource-rest');

class BestShotAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api-dev-best-shot.herokuapp.com/';
    
  }

  getTournaments() {
    return this.get("/api/v1/tournaments")
  }
}

module.exports = BestShotAPI;
