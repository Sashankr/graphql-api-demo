const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 4,
        name: "Joe",
        username: "joe",
        age: 25,
        nationality: "INDIA",
      },
      {
        id: 2,
        name: "Pedro",
        username: "pedro",
        age: 20,
        nationality: "BRAZIL",
      },
    ],
  },
  {
    id: 2,
    name: "Pedro",
    username: "pedro",
    age: 20,
    nationality: "BRAZIL",
  },
  {
    id: 3,
    name: "Sarah",
    username: "sarah",
    age: 25,
    nationality: "USA",
  },
  {
    id: 4,
    name: "Sashank",
    username: "sashank",
    age: 25,
    nationality: "INDIA",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "pedro",
        age: 20,
        nationality: "BRAZIL",
      },
    ],
  },
];

const MovieList = [
  {
    id: 1,
    name: "Interstellar",
    genre: "Sci-Fi",
  },
  {
    id: 2,
    name: "Once Upon A Time In Hollywood",
    genre: "Action",
  },
  {
    id: 3,
    name: "Jujitsu Kaisen 0",
    genre: "Anime",
  },
  {
    id: 4,
    name: "RRR",
    genre: "Action",
  },
];

module.exports = {
  UserList,
  MovieList,
};
