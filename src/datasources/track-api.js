const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    // this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    this.baseURL = 'https://api-dev-best-shot.herokuapp.com/';
    
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`)
  }

  getTrackModules(moduleId) {
    return this.get(`track/${moduleId}/modules`)
  }

  getTournaments() {
    return this.get("/api/v1/tournaments")
  }
}

module.exports = TrackAPI;
