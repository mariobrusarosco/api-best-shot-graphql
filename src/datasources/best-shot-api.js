const { RESTDataSource } = require('apollo-datasource-rest');

class BestShotAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    // this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    this.baseURL = 'https://api-dev-best-shot.herokuapp.com/';
    
  }

  getTournaments() {
    return this.get("/api/v1/tournaments")
  }
}

module.exports = BestShotAPI;
