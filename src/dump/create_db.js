db = db.getSiblingDB("soccer_guess");

db.users.drop()
db.users.insertMany([
  {
    _id: '5d914799989ed28e4be45fce',
    name: "Mario",
    guesses: [
      {
        id: "001",
        gameId: "001",
        tournamentId: "001",
        teamA: 1,
        teamB: 2
      },
      {
        id: "002",
        gameId: "002",
        tournamentId: "001",
        teamA: 3,
        teamB: 4
      }
    ]
  }
])

db.teams.drop()
db.teams.insertMany(
  [
    {
      name: "Corinthians",
      label: "COR"
    },
    {
      name: "Santos",
      label: "SAN"
    },
    {
      name: "Palmeiras",
      label: "PAL"
    },
    {
      name: "São Paulo",
      label: "SAO"
    }
  ]
)

db.players.drop()
db.players.insertMany([
    {
      team: 1,
      name: "Cássio",
      age: 31
    },
    {
      team: 2,
      name: "Jean Mota",
      age: 27
    },
    {
      team: 3,
      name: "Dudu",
      age: 26
    },
    {
      team: 4,
      name: "Dani Alves",
      age: 36
    }
  ]
)

db.games.drop()
db.games.insertMany(
  [
    {
      teams: ["1", "2"]
    },
    {
      teams: ["3", "4"]
    }
  ]
)


db.tournaments.drop()
db.tournaments.insertMany([
  {
    name: "Copa do Brasil"
  },
  {
    name: "Campeonato Brasileiro"
  }
])
