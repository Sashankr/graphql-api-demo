const { UserList, MovieList } = require("../mock");
const _ = require("lodash");

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      console.log(typeof Number(id));
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },
};

module.exports = { resolvers };
