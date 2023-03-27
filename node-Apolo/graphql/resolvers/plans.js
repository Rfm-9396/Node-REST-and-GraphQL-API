const pool = require('../../db')

module.exports = {
  Query: {
    async getPlans() {
      try {
        const plans = await pool.query('SELECT * FROM plan')
        return plans.rows;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
Mutation: {
    async addPlan(_, { name, bannerOffer }) {
      try {
        const query = {
          text: 'INSERT INTO plan(name, bannerOffer) VALUES($1, $2) RETURNING *',
          values: [name, bannerOffer]
        }
        const plan = await pool.query(query);
        return plan.rows[0];
      } catch (error) {
        throw new Error(error);
      }
    }
    
    
  }
}
