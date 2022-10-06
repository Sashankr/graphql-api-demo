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

module.exports = {
  UserList,
};
