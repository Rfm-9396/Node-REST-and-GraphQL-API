const plansResolvers = require('./plans');

module.exports = {
  Query: {
    ...plansResolvers .Query,
  },
  Mutation: {
    ...plansResolvers .Mutation,
  },
};
