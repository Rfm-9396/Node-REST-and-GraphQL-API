const gql = require('graphql-tag');

module.exports = gql`
  type Plan{
      name: String!
      bannerOffer: String!
      offerHL: String!
    }

  type Query {
      getPlans: [Plan]
  }

  type Mutation{
      addPlan(name: String!, bannerOffer: String!): Plan!
      
  }
`
