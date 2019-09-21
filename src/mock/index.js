export const teams = [
  {
    id: '1',
    name: 'Corinthians',
    label: 'COR'
  },
  {
    id: '2',
    name: 'Santos',
    label: 'SAN'
  },
  {
    id: '3',
    name: 'Palmeiras',
    label: 'PAL'
  },
  {
    id: '4',
    name: 'São Paulo',
    label: 'SAO'
  }
]

export const players = [
  {
    id: '6654654',
    team: 1,
    name: 'Cássio',
    age: 31
  },
  {
    id: '4564565',
    team: 2,
    name: 'Jean Mota',
    age: 27
  },
  {
    id: '512354543',
    team: 3,
    name: 'Dudu',
    age: 26
  },
  {
    id: '798785',
    team: 4,
    name: 'Dani Alves',
    age: 36
  }
]

export const users = [
  {
    id: '2asdHa8324fsd-dsa',
    name: 'Mario',
    guesses: [
      {
        guess_id: '001',
        game_id: '001',
        tournamentId: '001',
        guess: { team_a: 1, team_b: 2 }
      },
      {
        guess_id: '002',
        tournamentId: '001',
        game_id: '002',
        guess: { team_a: 3, team_b: 0 }
      }
    ]
  }
]

export const games = [
  {
    id: '001',
    teams: ['1', '2']
  },
  {
    id: '002',
    teams: ['3', '4']
  }
]

export const tournaments = [
  {
    id: '001',
    name: 'Copa do Brasil'
  },
  {
    id: '002',
    name: 'Campeonato Brasileiro'
  }
]
