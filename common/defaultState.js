const state = {
  event: null,
  game: {
    teams: [
      {
        name: "0",
        score: 0,
      },
      {
        name: "1",
        score: 0,
      },
    ],
  },
  players: [
    {
      id: "A",
      boost: 0,
      team: 0,
    },
    {
      id: "B",
      boost: 0,
      team: 0,
    },
    {
      id: "C",
      boost: 0,
      team: 0,
    },
    {
      id: "D",
      boost: 0,
      team: 1,
    },
    {
      id: "E",
      boost: 0,
      team: 1,
    },
    {
      id: "F",
      boost: 0,
      team: 1,
    },
  ],
};

export default state;
